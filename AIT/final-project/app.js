require('./db');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local').Strategy;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(flash());

// enable sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'secret cookie thang (store this elsewhere!)',
    resave: true,
    saveUninitialized: true
};
app.use(session(sessionOptions));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// middleware for passport
app.use(passport.initialize());
app.use(passport.session());
// body parser setup
app.use(bodyParser.urlencoded({ extended: false }));
// serve static files
app.use(express.static(path.join(__dirname, 'public')));

let passportlogin = {};
let register = {};
const Score = mongoose.model('Score');
// passport config (just still in working progress, dont think it's gonna work yet need some help still)
const User = require('./db');
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {message:'Incorrect username.'});
      }
      user.isValidPassword(user,password, function(success) {
        if (success){
          return done(null, user);
        }
        else {
          return done(null, false, {message:'Incorrect password.'});
        }
      });
    });
  })
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ROUTES!!!

// create router for the homepage
app.get('/', (req, res) => {
  // display accordingly if a user has logged in or there is now a new user
  if (passportlogin.user && passportlogin.user.username){
    res.render('index', {login: passportlogin.user.username});
  }
  else if (register.user && register.user.username){
    res.render('index', {register: register.user.username});
  }
  else {
    res.render('index', {username: null});
  }
});
// create router for the login page
app.get('/login', (req, res) => {
  if (passportlogin && passportlogin.err){
    const temp = passportlogin.err;
    passportlogin.err = null;
    res.render('login',{message: temp.message});
  }
  else{
    res.render('login',{message: null});
  }
});
app.post('/login', function(req,res) {
  passport.authenticate('local',(err, user, info) => {
    if (!user){
      passportlogin.err = info;
      res.redirect('/login');
    }
    else {
      passportlogin.user = user;
      res.redirect('/');
    }
  })(req,res);
});
app.get('/logout', function(req, res){
  req.logout();
  passportlogin = {};
  register = {};
  res.redirect('/');
});
// create router for the register page
app.get('/register', (req, res) => {
  if (register && register.err){
    const temp = register.err;
    register.err = null;
    res.render('register',{message: temp});
  }
  else {
    res.render('register',{message: null});
  }
});
// create router for the post on register page
app.post('/register', (req, res) => {
  User.findOne({username: req.body.username}, (err, user, count) => {
    if (!user){
        new User({username: req.body.username, email: req.body.email, password: req.body.password}).save(function(err,result){
          if (err){
            console.log(err);
          }
          else {
            register.user = result;
            res.redirect('/');
          }
        });
    }
    else {
      // username already exists
      // TELL USER THERE WAS AN ERROR!
      register.err = "Username already exists";
      res.redirect('/register');
    }
  })
});

// create router for the add score page (should only be able to be accessed if logged in and if someone does try anyways then just
// redirect them to the register page
app.get('/add', (req, res) => {
  if (passportlogin.user && passportlogin.user.username){
    res.render('add', {username: passportlogin.user.username});
  }
  else if (register.user && register.user.username){
    res.render('add', {register: register.user.username});
  }
  // if not logged in then redirect to /login
  else {
    res.redirect('/login');
  }
});
// create router for the post on the add score page
app.post('/add', (req,res) => {
  console.log('inside addcallback');
  if (passportlogin.user && passportlogin.user.username){
    console.log('passport user exists');
    new Score({
      date: req.body.date,
      golfcourse: req.body.course,
      par: req.body.par,
      score: req.body.score,
      user: passportlogin.user._id
    }).save(function(err, result, count){
      console.log('inside passport save callback');
      if (err){
        console.log(err);
      }
      else {
        res.redirect('/list');
      }
    });
  }
  else if (register.user && register.user.username){
    console.log('registered user exists');
    new Score({
      date: req.body.date,
      golfcourse: req.body.course,
      par: req.body.par,
      score: req.body.score,
      user: register.user._id
    }).save(function(err, result, count){
      console.log('inside save callback');
      if (err){
        console.log(err);
      }
      else {
        res.redirect('/list');
      }
    });
  }
});
// create router for the list of scores page (obviously only a user can see this and if they logged in and again if someone does try to go
// to this route then just redirect them back to the login page
app.get('/list/data', (req,res) => {
  if (passportlogin.user && passportlogin.user.username){
    User.findOne({username: passportlogin.user.username}, function(err, mongouser, count){
      if (err){
        console.log(err);
      }
      else {
        Score.find({ user: mongouser._id }, function(err,scores,count){
          res.json(scores.map(function(ele){
            return {
              'date': ele.date,
              'golfcourse': ele.golfcourse,
              'par': ele.par,
              'score': ele.score,
              'user': passportlogin.user._id
            }
          }));
        });
      }
    });
  }
  else if (register.user && register.user.username){
    User.findOne({username: register.user.username}, function(err, mongouser, count){
      if (err){
        console.log(err);
      }
      else {
        Score.find({ user: mongouser._id }, function(err,scores,count){
          res.json(scores.map(function(ele){
            return {
              'date': ele.date,
              'golfcourse': ele.golfcourse,
              'par': ele.par,
              'score': ele.score,
              'user': register.user._id
            }
          }));
        });
      }
    });
  }
  // if not logged in then redirect to /login
  else {
    res.redirect('/login');
  }
});
app.get('/list', (req,res) => {
  if (passportlogin.user && passportlogin.user.username){
    res.render('list', {list: passportlogin.user.username});
  }
  else if (register.user && register.user.username){
    res.render('list', {register: register.user.username});
  }
  else {
    res.redirect('/login');
  }
});
app.post('/list/update', (req,res) => {
  if (passportlogin.user && passportlogin.user.username){
    User.findOne({username: passportlogin.user.username}, function(err, mongouser, count){
      if (err){
        console.log(err);
      }
      else {
        Score.findOneAndUpdate({ user: mongouser._id }, {date: req.body.date, golfcourse: req.body.course, par:req.body.par, score:req.body.score}, {upsert:true, new:true}, function(err,score){
          if (err){
            res.json({error: 'problem updating score.'});
          }
          else{
            res.json(score);
          }
        });
      }
    });
  }
  else if (register.user && register.user.username){
    User.findOne({username: register.user.username}, function(err, mongouser, count){
      if (err){
        console.log(err);
      }
      else {
        Score.findOneAndUpdate({ user: mongouser._id }, {date: req.body.date, golfcourse: req.body.course, par:req.body.par, score:req.body.score}, {upsert:true, new:true}, function(err,score){
          if (err){
            res.json({error: 'problem updating score.'});
          }
          else{
            res.json(score);
          }
        });
      }
    });
  }
});
app.post('/list/delete', (req,res) => {
  if (passportlogin.user && passportlogin.user.username){
    User.findOne({username: passportlogin.user.username}, function(err, mongouser, count){
      if (err){
        console.log(err);
      }
      else {
        Score.findOneAndRemove({user: mongouser.id}, function(err,score){
          if (err){
            res.json({error: 'problem deleting score.'});
          }
          else{
            res.json(score);
          }
        });
      }
    });
  }
  else if (register.user && register.user.username){
    User.findOne({username: register.user.username}, function(err, mongouser, count){
      if (err){
        console.log(err);
      }
      else {
        Score.findOneAndRemove({user: mongouser.id}, function(err,score){
          if (err){
            res.json({error: 'problem deleting score.'});
          }
          else{
            res.json(score);
          }
        });
      }
    });
  }
});

console.log('port started');
app.listen(process.env.PORT || 3000);
