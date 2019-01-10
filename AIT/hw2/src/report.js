// report.js
const airBnb = require('./bnbfunc.js');
// don't need this require anymore!!! const fs = require('fs');
const request = require('request');

// fs.readFile('/Users/paulpark/Desktop/combined-airbnb-data.json', 'utf-8', (err, data) => {
//   if(err) {
//     console.log(err);
//   }
//   const file = data.trim();
//   const objects = file.split("\n");
//   // JSON.parse returns a javascript object
//   // exclude the last line
//   for(let i = 0; i < objects.length-1; i++) {
//     objects[i] = JSON.parse(objects[i]);
//   }
//   /*
//   console.log("Listing no. 17453 is a listing of type:", objects[17453].room_type, "located in", objects[17453].neighborhood, objects[17453].city, "with a rating of", objects[17453].overall_satisfaction, "and has been reviewed", objects[17453].reviews, "times.");
//   */
//   airBnb.processAirBnbData(objects);
// });

// PART 3 of HOMEWORK
// put all the steps in a function so that you can use recursion
function processFiles(url){
  request(url , function (error, response, body) {
    // if there's an error console.log it
    if (error){
      console.log(error);
    }
    const file = body.trim();
    const objects = file.split("\n");
    // JSON.parse returns a javascript object
    // exclude the last line
    for(let i = 0; i < objects.length-1; i++) {
      objects[i] = JSON.parse(objects[i]);
    }
    // leaving aside the last object in the file that has key called "next_file"
    const nextFile = JSON.parse(objects.pop()).next_file;
    console.log("URL:", url);
    console.log("===================================");
    airBnb.processAirBnbData(objects);
    // use recursion to call function again with the nextFile
    // however if there is no object with a next_file property
    if (nextFile !== undefined){
      processFiles('http://jvers.com/csci-ua.0480-spring2018-008/homework/02/airbnb/' + nextFile);
    }
  });
}

// call the function here with the link posted on Piazza
processFiles("http://jvers.com/csci-ua.0480-spring2018-008/homework/02/airbnb/1a9c766e75e3ff17009936fc570fb8e1.json");
