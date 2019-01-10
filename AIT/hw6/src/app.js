const express = require('express');
const mongoose = require('mongoose');

require('./db');
const session = require('express-session');
const path = require('path');
const auth = require('./auth.js');

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'add session secret here!',
    resave: false,
    saveUninitialized: true,
}));

const Article = mongoose.model('Article');

app.get('/', (req, res) => {
  Article.find({}, function(err,result,count){
    if (err){
      console.log(err);
    }
    else {
      if (req.session.user){
        res.render('index', {username: req.session.user.username, articles: result});
      }
      else {
        res.render('index', {username: null, articles: result});
      }
    }
  });
});

app.get('/article/add', (req, res) => {
  // if user is logged in
  if (req.session.user){
    res.render('article-add', {username: req.session.user.username});
  }
  // if not logged in then redirect to /login
  else {
    res.redirect('/login');
  }
});
app.post('/article/add', (req, res) => {
  new Article({
    title: req.body.title,
    url: req.body.url,
    description: req.body.description,
    user: req.session.user._id
  }).save(function(err, result, count){
    if (err){
      console.log(err);
    }
    else {
      res.redirect('/');
    }
  });
});

// come up with a url for /article/slug-name!
app.get('/article/:slug', function(req, res, next){
  Article.findOne({slug: req.params.slug}, (err, result) =>{
    res.render('article-detail', {title: result.title,url: result.url,description: result.description,username: req.session.user.username});
  });
});


app.get('/register', (req, res) => {
  res.render('register');
});
app.post('/register', (req, res) => {
  const info = req.body;
  auth.register(info.username, info.email, info.password,
    (err) => {
      res.render('register', {message: err.message});},
    (user) => {
      auth.startAuthenticatedSession(req, user, function(err){
        if (err){
          console.log(err);
        }
        else {
          res.redirect('/');
        }
      });
    });
});


app.get('/login', (req, res) => {
  res.render('login');
});
app.post('/login', (req, res) => {
  const info = req.body;
  auth.login(info.username, info.password,
    (err) => {
      res.render('login', {message: err.message});
    },
    (user) => {
      auth.startAuthenticatedSession(req, user, function(err){
        if (err){
          console.log(err);
        }
        else {
          res.redirect('/');
        }
      });
    });
});


console.log('Started server on port 3000');
app.listen(3000);
