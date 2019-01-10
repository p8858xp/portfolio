// hoffy.js

const rev = {
    sum: function(...nums) {
      const sum = nums.reduce(function(accum, ele){
        return accum + ele;
      }, 0);
      return sum;
    },
    repeatCall: function(fn, n, ...arg) {
      if (n === 0){
        return undefined;
      }
      else {
        fn(arg[0]);
        return repeatCall(fn, n-1, ...arg);
      }
    },
    repeatCallAllArgs: function(fn, n, ...args){
      if (n === 0){
        return undefined;
      }
      else {
        fn(...args);
        return repeatCallAllArgs(fn, n-1, ...args);
      }
    },
    makePropertyChecker: function(prop){
      return function(f){
        if (f.hasOwnProperty(prop)){
          return true;
        }
        else {
          return false;
        }
      };
    },
    constrainDecorator: function(fn, min, max){
      return function(...args){
          const returnValue = fn(...args);
          if (returnValue > max){
              return max;
          }else if(returnValue < min){
              return min;
          }else{
              return returnValue;
          }
      };
    },
    limitCallsDecorator: function(fn, n){
      let counter = 0;
      return function(...args){
        if(counter < n){
          counter++;
          return fn(...args);
        }
        else{
          return undefined;
        }
      };
    },
    mapWith: function(fn){
      return function(arr){
        return arr.map(fn);
      };
    },
    simpleINIParse: function(s){
      // name and value pairs are separated by new lines so split using "\n"
      const pairs = s.split("\n");
      const object = {};
      pairs.map(function (element){
        if(element.includes("=")){
          const nameVal = element.split("=");
          // setting javascript object values dynamically
          // (nameVal[0] is the left side of the = operator and nameVal[1] is the right side of the
          // = operator
          object[nameVal[0]] = nameVal[1];
        }
      });
      return object;
    },
    readFileWith: function(fn){
      // (make sure the fs module is require'd in your project)
      const fs = require('fs');
      // return function with 2 parameters (fileName and the callback function specified by caller)
      return function(fileName, callBack) {
        fs.readFile(fileName, 'utf8', (err, data) => {
          // if there is an error the parsed data should be undefined
          // call the callback passed into the new function with the err object (regardless of wheteher or not it's null/undefined) and the parsed data
          if(err) {
            data = undefined;
            callBack(err, data);
          }
          // parse the data resulting from a file read using the original parsing function, fn passed into // readFileWith if there's no error
          else {
            data = fn(data);
            callBack(err, data);
          }
        });
      };
    }
};
module.exports = rev;
