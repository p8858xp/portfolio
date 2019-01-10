const DEFAULT_AIT_PORT = 3000;

// database setup
const mongoose = require('mongoose');
require('./db');

// express
const express = require('express');
const app = express();

// static files
const path = require("path");
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// body parser
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

const Review = mongoose.model('Review');

app.get('/api/reviews', function(req, res) {
  Review.find({}, function(err, reviews, count){
    res.json(reviews.map(function(ele){
      return {
          'name': ele.name,
          'semester': ele.semester,
          'year': ele.year,
          'review': ele.review
      }
    }));
  });
});

app.post('/api/review/create', (req, res) => {
  // TODO: create new review... if save succeeds, send back JSON
  // representation of saved object
  new Review ({
    name: req.body.name,
    semester: req.body.semester,
    year: req.body.year,
    review: req.body.review
  }).save(function(err, result, count){
    if (err){
      console.log(err);
      res.json({
        error: 'error trying to create a new review'
      });
    }
    else {
      res.json(result);
    }
  });
});

app.listen(process.env.PORT || DEFAULT_AIT_PORT, (err) => {
  console.log('Server started (ctrl + c to shut down)');
});
