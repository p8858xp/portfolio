const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.set('view engine', 'hbs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const complaintData = [{complaint:"The person sitting next to me was eating hard-boiled eggs in the subway car (???!!!)", subwayLine: "G"}, {complaint:"There was a possum loose on the platform", subwayLine: "F"}, {complaint: "The train was an hour late!", subwayLine: "A"}];

// 5. try if you can do part 5 for extra credit
app.use(function(req, res, next){
  console.log("req method: ", req.method);
  console.log("req path: ", req.path);
  console.log("=====");
  console.log("req.query: ", req.query);
  console.log("req.body: ", req.body);
  next();
});
app.get('/', function(req, res){
  if(req.query.filterLine) {
   const filteredComplaint = complaintData.filter(line => line.subwayLine.toLowerCase() === req.query.filterLine.toLowerCase());
   // return the filtered data in reverse
   res.render('index', {list: filteredComplaint.reverse()});
 }
 else{
   // return the filtered data in reverse
   const updated = [];
   for (let i = complaintData.length-1; i >= 0; i--){
     updated.push(complaintData[i]);
   }
   res.render('index', {list: updated});
 }
});
app.get('/complain', function(req, res){
  res.render('complain');
});
app.post('/complain', function(req, res){
  const data = req.body;
  const newComplaint = {complaint: data.complaint, subwayLine: data.line};
  complaintData.push(newComplaint);
  res.redirect('/');
});

app.listen(3000);
console.log('Started server on port 3000');
