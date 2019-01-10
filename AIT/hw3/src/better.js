/* better.js */
const App = require('./webframework.js').App;
const app = new App();
const path = require('path');
const fs = require('fs');
// perform 9 requests
app.get('/', function(req, res) {
  res.sendFile("/html/index.html")
});
app.get('/css/base.css', function(req, res) {
  res.sendFile("/css/base.css");
});

app.get('/image3', function(req, res) {
  res.sendFile("/img/image3.png");
});

app.get('/random', function(req, res) {
  const arrayRoute = ['/image1.jpg', '/image2.gif', '/image3'];
  const ranNum = Math.floor((Math.random() * 3) + 1);
  if (ranNum === 1){
    res.sendFile('/img/image1.jpg');
  }
  else if (ranNum === 2){
    res.sendFile('/img/image2.gif');
  }
  else if (ranNum === 3){
    res.sendFile("/img/image3.png");
  }
});
app.get('/image1.jpg', function(req,res){
  res.sendFile('/img/image1.jpg');
});
app.get('/rando', function(req, res) {
  res.redirect('http://localhost:8080/random');
});
app.get('/image2.gif', function(req, res) {
  res.sendFile('/img/image2.gif');
});
app.get('/form', function(req, res) {
  res.sendFile("/html/form.html");
});
app.post('/form', function(req,res){
  const splitHalf = req.body.split('&');
  let s = '';
  for (let i = 0; i < splitHalf.length; i++){
    s += splitHalf[i].split('=')[1];
    s += ' ';
  }
  res.send(200, s);
});
app.listen(8080, '127.0.0.1');
