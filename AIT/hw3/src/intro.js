/* intro.js */
const fs = require('fs');
const net = require('net');
const path = require('path');

const [PORT, HOST] = [8080, '127.0.0.1'];
class Request {
    constructor(s) {
        const parts = s.split(' ');
        this.body = s.split('\r\n\r\n')[1];
        this.method = parts[0];
        this.path = parts[1];
    }
}

const routes = {
    '/' : (sock) => {
      sock.write('HTTP/1.1 200 OK\r\nContent-Type:text/html\r\n\r\n<h1>I Have Some Web Skillz</h1><h2>Links 4 You</h2><ul><li><a href = "/such/stylish">A Page With Some Style!</a></li><li><a href = "/picsplz">A Page With an Image!</a></li><li><a href = "/showanimage">Can You Redirect Me? OH YES!</a></li></ul><h2>U Like Forms? Submit This!</h2><form method="POST" action="">Name: <input type=' + "'text'" + 'name=' + "'name'" + '><input type="submit"></form>');
      sock.end();
    },
    '/such/stylish' : (sock) => {
      sock.write('HTTP/1.1 200 OK\r\nContent-Type:text/html\r\n\r\n<link href="/css/base.css" rel="stylesheet"><div id = "box"><h1>Such Style!</h1> <p>All your paragraphs R green</p> <h4> Oh yeah, theres a box around this thing.</h4></div>');
      sock.end();
    },
    '/picsplz' : (sock) => {
      sock.write('HTTP/1.1 200 OK\r\nContent-Type:text/html\r\n\r\n<img src="/img/animal.jpg"><p>This is an image of a lion.</p>');
      sock.end();
    },
    '/showanimage' : (sock) => {
      sock.write('HTTP/1.1 301 Moved Permanently\r\nLocation:/picsplz\r\nContent-Type:text/html\r\n\r\n<p>redirect is in place.</p>');
      sock.end();
    },
    '/css/base.css' : (sock) => {
      sock.write('HTTP/1.1 200 OK\r\nContent-Type:text/css\r\n\r\nh1 {color: red; text-decoration: underline;} #box {background-color: pink; width: 500px; height: 500px;} p {color: green;} h4 {color: white;}');
      sock.end();
    },
    '/img/animal.jpg' : (sock) => {
      const abs_path = path.join(__dirname, "..", "public", "/img/animal.jpg");
      let s = "";
      fs.readFile(abs_path, function(err,data){
        if (err) {
          s = 'HTTP/1.1 500 Internal Servor Error' + '\r\n' + 'Content-Type: text/plain' + '\r\n\r\n' + 'There was an error reading this file...';
          sock.write(s);
          sock.end();
        }
        else{
            s = 'HTTP/1.1 200 OK' + '\r\n' + 'Content-Type: image/jpg' + '\r\n\r\n';
            sock.write(s);
            sock.write(data);
            sock.end();
        }
      });
    }
};


// create a server
// when a client connects call the callback function provided (the arrow
// function that takes a socket as an argument)
const server = net.createServer((sock) => {
  sock.on('data', (binaryData) => {
    const s = binaryData.toString();
    const req = new Request(s);
    if (req.method === 'GET'){
      if(routes.hasOwnProperty(req.path)) {
        const requestHandler = routes[req.path];
        requestHandler(sock);
      }
      else{
        sock.write('HTTP/1.1 404 Not Found\r\nContent-Type:text/plain\r\n\r\nnot found!');
        sock.end();
      }
    }
    else if (req.method === 'POST'){
      if(req.path === '/') {
        sock.write('HTTP/1.1 200 OK\r\nContent-Type:text/plain\r\n\r\n' + req.body);
        sock.end();
      }
      else{
        sock.write('HTTP/1.1 404 Not Found\r\nContent-Type:text/plain\r\n\r\nnot found!');
        sock.end();
      }
    }
    else {
      // if the request trying to be made is not GET or POST then send back a 405 saying that the method is not allowed
      sock.write('HTTP/1.1 405 Method Not Allowed\r\nContent-Type:text/plain\r\n\r\nMethod Not Allowed.');
      sock.end();
    }
  });
});

// listen on this port and address (if using 127.0.0.1, then accessible in
// browser as localhost:8080)
server.listen(PORT, HOST);
