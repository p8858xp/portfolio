/* webutils.js */
const fs = require('fs');
const net = require('net');
const path = require('path');

const rev = {
    getExtension: function(fileName){
      let ext;
      if (!fileName.includes('.')){
        ext = "";
      }
      else{
        const splitFile = fileName.split(".");
        ext = splitFile[splitFile.length-1];
        ext = ext.toLowerCase();
      }
      return ext;
    },
    sendTextFile: function(fileName, sock){
      const abs_path = path.join(__dirname, "..", "public", fileName);
      let s = "";
      fs.readFile(abs_path, 'utf-8', function(err,data){
        if (err) {
          s = 'HTTP/1.1 500 Internal Servor Error' + '\r\n' + 'Content-Type: text/plain' + '\r\n\r\n' + 'There was an error reading this file...';
          sock.write(s);
          sock.end('');
        }
        else {
          const ext = rev.getExtension(fileName);
          if (ext === 'html'){
            s = 'HTTP/1.1 200 OK' + '\r\n' + 'Content-Type: text/html' + '\r\n\r\n' + data;
            sock.write(s);
            sock.end('');
          }
          else if (ext === 'css'){
            s = 'HTTP/1.1 200 OK' + '\r\n' + 'Content-Type: text/css' + '\r\n\r\n' + data;
            sock.write(s);
            sock.end('');
          }
          else if (ext === 'txt'){
            s = 'HTTP/1.1 200 OK' + '\r\n' + 'Content-Type: text/plain' + '\r\n\r\n' + data;
            sock.write(s);
            sock.end('');
          }
        }
      });
    },
    sendImage: function(fileName, sock){
      const abs_path = path.join(__dirname, "..", "public", fileName);
      let s = "";
      fs.readFile(abs_path, function(err,data){
        if (err) {
          s = 'HTTP/1.1 500 Internal Servor Error' + '\r\n' + 'Content-Type: text/plain' + '\r\n\r\n' + 'There was an error reading this file...';
          sock.write(s);
          sock.end('');
        }
        else{
          const ext = rev.getExtension(fileName);
          if (ext === 'jpg'){
            s = 'HTTP/1.1 200 OK' + '\r\n' + 'Content-Type: image/jpg' + '\r\n\r\n';
            sock.write(s);
            sock.write(data);
            sock.end('');
          }
          else if (ext === 'jpeg'){
            s = 'HTTP/1.1 200 OK' + '\r\n' + 'Content-Type: image/jpeg' + '\r\n\r\n';
            sock.write(s);
            sock.write(data);
            sock.end('');
          }
          else if (ext === 'gif'){
            s = 'HTTP/1.1 200 OK' + '\r\n' + 'Content-Type: image/gif' + '\r\n\r\n';
            sock.write(s);
            sock.write(data);
            sock.end('');
          }
          else if (ext === 'png'){
            s = 'HTTP/1.1 200 OK' + '\r\n' + 'Content-Type: image/png' + '\r\n\r\n';
            sock.write(s);
            sock.write(data);
            sock.end('');
          }
        }
      });
    }
};
module.exports = rev;
