/* webframework.js */
const net = require('net');
const path = require('path');
const fs = require('fs');
const webutils = require('./webutils.js');
class Request {
  // constructor
  constructor(httpRequest){
    const reqWhole = httpRequest.split('\r\n');
    const reqLine = reqWhole[0].split(' ');
    let header = {};
    for(let i = 1; i < reqWhole.length - 1; i++){
      if(reqWhole[i]) {
        const someHeader = reqWhole[i].split(' ');
        const headerName = someHeader[0].substring(0, someHeader[0].indexOf(':'));
        const headerValue = someHeader[1];
        header[headerName] = headerValue;
      }
    }
    this.method = reqLine[0];
    this.path = reqLine[1];
    this.headers = header;
    this.body = reqWhole[reqWhole.length - 1];
   }
   // methods - toString() returns a string representation of the request object as a valid http request
   toString(){
     let s = '';
     s += this.method + ' ' + this.path + ' ' + 'HTTP/1.1\r\n';
     for (const i in this.headers){
       s += i + ': ' + this.headers[i] + '\r\n';
     }
     s += '\r\n';
     s += this.body;
     return s;
   }
}

class Response {
  constructor(socket){
    this.sock = socket;
    this.headers = {};
    this.body = '';
    this.statusCode = 0; // set status code to 200 by default
  }
  // methods (9-10)
  setHeader(name, value){
    this.headers[name] = value;
  }
  write(data){
    this.sock.write(data);
  }
  end(s){
    this.sock.end(s);
  }
  send(statusCode, body){
    this.statusCode = statusCode;
    this.body = body;
    this.end(this.toString());
  }
  map(statusCodes){
    let info = '';
    switch(statusCodes){
      case 200:
        info = 'OK';
        break;
      case 301:
        info = 'Moved Permanently';
        break;
      case 302:
        info = 'Found';
        break;
      case 303:
        info = 'See Other';
        break;
      case 400:
        info = 'Bad Request';
        break;
      case 404:
        info = 'Not Found';
        break;
      case 405:
        info = 'Method Not Found';
        break;
      case 500:
        info = 'Internal Server Error';
        break;
    }
    return info;
  }
  writeHead(statusCode){
    this.statusCode = statusCode;
    let s = '';
    // get the description based on the statusCode
    s += 'HTTP/1.1 ' + this.statusCode + ' ' + this.map(this.statusCode) + '\r\n';
    if(this.headers) {
      for (const i in this.headers) {
        s += i + ": " + this.headers[i] + "\r\n";
      }
      s += "\r\n";
    }
    this.write(s);
  }
  redirect(statusCode, url){
    // if no statusCode is given then default to permanent redirect 301
    if(arguments.length === 1) {
      this.statusCode = 301;
      this.setHeader('Location', arguments[0]);
      this.writeHead(301);
      this.end();
    }
    // otherwise
    else {
      this.statusCode = statusCode;
      this.setHeader('Location', url);
      this.writeHead(statusCode);
      this.end();
    }
  }
  toString(){
    let s = "HTTP/1.1 " + this.statusCode + " " + this.map(this.statusCode) +"\r\n";
    if(this.headers) {
      for (const i in this.headers) {
        s += i + ": " + this.headers[i] + "\r\n";
      }
      s += "\r\n";
    }
    if(this.body) {
      s += this.body;
    }
    return s;
  }
  sendFile(fileName){
    const abs_path = path.join(__dirname, "..", "public", fileName);
    let contentType = '';
    if (webutils.getExtension(abs_path) === 'jpg' || webutils.getExtension(abs_path) === 'jpeg'){
      contentType = 'image/jpeg';
      fs.readFile(abs_path, (err, data) => { this.handleRead(contentType, err, data); });
    }
    else if (webutils.getExtension(abs_path) === 'png'){
      contentType = 'image/png';
      fs.readFile(abs_path, (err, data) => { this.handleRead(contentType, err, data); });
    }
    else if (webutils.getExtension(abs_path) === 'gif'){
      contentType = 'image/gif';
      fs.readFile(abs_path, (err, data) => { this.handleRead(contentType, err, data); });
    }
    else if (webutils.getExtension(abs_path) === 'html'){
      contentType = 'text/html';
      fs.readFile(abs_path, {encoding:'utf8'}, (err, data) => { this.handleRead(contentType, err, data); });
    }
    else if (webutils.getExtension(abs_path) === 'css'){
      contentType = 'text/css';
      fs.readFile(abs_path, {encoding:'utf8'}, (err, data) => { this.handleRead(contentType, err, data); });
    }
    else if (webutils.getExtension(abs_path) === 'txt'){
      contentType = 'text/plain';
      fs.readFile(abs_path, {encoding:'utf8'}, (err, data) => { this.handleRead(contentType, err, data); });
    }
  }
  handleRead(contentType, err, data){
    if(err){
      this.setHeader('Content-Type', contentType);
      this.writeHead(500);
      this.write(data);
      this.end();
    }
    else {
      this.setHeader('Content-Type', contentType);
      this.writeHead(200);
      this.write(data);
      this.end();
    }
  }
}

class App {
  constructor(){
    this.server = net.createServer(this.handleConnection.bind(this));
    this.routes = {};
    this.routes["GET"] = {};
    this.routes["POST"] = {};

  }
  // methods (6)
  get(path, cb){
    this.routes["GET"][path] = cb;
  }
  post(path, cb){
    this.routes["POST"][path] = cb;
  }
  listen(port, host){
    this.server.listen(port, host);
  }
  handleConnection(sock){
    sock.on('data', this.handleRequestData.bind(this, sock));
  }
  handleRequestData(sock, binaryData){
    // create a new Request object based on converted binaryData
    const req = new Request(binaryData + '');
    //create a new Response obect
    const res = new Response(sock);
    //sets a callback for when the connection is closed (the callback will be to log the response using logResponse below)
    sock.on('close', this.logResponse.bind(this, req, res));
    // If the request does not a a Host header then it's invalid
    if(!req.headers["Host"]){
      res.send(400, "Invalid header!");
    }
    // otherwise, VALID!!!
    else{
      if(this.routes.hasOwnProperty(req.method) && this.routes[req.method].hasOwnProperty(req.path)){
        this.routes[req.method][req.path](req, res);
      }
      else{
        res.send(404, "NOT FOUND ERROR!");
      }
    }
  }
  logResponse(req, res){
    let s = '';
    s += req.method + ' ';
    s += req.path + ' ';
    s += res.statusCode + ' ';
    s += this.map(res.statusCode);
    console.log(s);
  }
  map(statusCodes){
    let info = '';
    switch(statusCodes){
      case 200:
        info = 'OK';
        break;
      case 301:
        info = 'Moved Permanently';
        break;
      case 302:
        info = 'Found';
        break;
      case 303:
        info = 'See Other';
        break;
      case 400:
        info = 'Bad Request';
        break;
      case 404:
        info = 'Not Found';
        break;
      case 405:
        info = 'Method Not Found';
        break;
      case 500:
        info = 'Internal Server Error';
        break;
    }
    return info;
  }
}

module.exports.Request = Request;
module.exports.Response = Response;
module.exports.App = App;
