// app.js
require('./db');
const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
const bodyParser = require('body-parser');
const session = require('express-session');
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

const sessionOptions = {
	secret: 'secret for signing session id',
	saveUninitialized: false,
	resave: false
};
app.use(session(sessionOptions));

app.use(function (req, res, next) {
    if (!req.session.views) {
        req.session.views = 0;
    }
    req.session.views += 1;
    next();
});
app.get('/', function(req, res) {
  const query = {};
  if(req.query.semester !== ""){
    query.semester = req.query.semester;
  }
  if(req.query.year !== ""){
    query.year = req.query.year;
  }
  if(req.query.professor !== ""){
    query.professor = req.query.professor;
  }

  if (req.query.semester || req.query.year || req.query.professor){
    Review.find(query,function(err, reviews, count){
      res.render('index', {reviews:reviews, sesh: req.session.views});
    });
  }
  else{
    Review.find(function(err,reviews,count){
      res.render('index', {reviews:reviews, sesh: req.session.views});
    });
  }
});

app.get('/reviews/add', function(req, res) {
  res.render('add', {sesh: req.session.views});
});

app.post('/reviews/add', function(req, res) {
  req.session.reviews = [];
  const body = req.body;
  const courseNumber = body.courseNumber;
  const courseName = body.courseName;
  const semester = body.semester;
  const year = body.year;
  const professor = body.professor;
  const review = body.review;
  req.session.reviews.push({courseNumber: courseNumber, courseName: courseName, semester: semester, year: year, professor: professor, review: review});
  new Review({
    courseNumber: courseNumber,
    courseName: courseName,
    semester: semester,
    year: year,
    professor: professor,
    review: review
  }).save(function(err, reviews, count) {
    res.redirect('/');
  });
});

app.get('/reviews/mine', function(req, res) {
  res.render('mine', {addedReviews: req.session.reviews, sesh: req.session.views});
});


app.listen(3000);
console.log('Started server on port 3000');
