// bnbfunc.js

// must use these array methods at least once each
// forEach
// filter
// map
// reduce

/* Your report will use the data passed in to determine:
  1. The average rating of all listings
  2. The average price of all listings
  3. All listings in the current dataset with a "rating greater than 4.8, priced less than 55, and accommodating more than 6 people"
  4. The two highest reviewed listings
  5. The borough with the most expensive listings on average in NYC (if NYC listings exist)
*/
const rev = {
  processAirBnbData: function(listings) {
    // 1. AVERAGE RATINGS
    const arrRatings = listings.map(function(ele){
      if (ele.overall_satisfaction !== undefined){
        return parseFloat(ele.overall_satisfaction);
      }
    });
    // removes the undefined part in the data
    arrRatings.pop(-1);
    const sumRatings = arrRatings.reduce(function(accum, ele){
      return accum + ele;
    }, 0.0);
    const avgRating = sumRatings / listings.length;
    console.log("* Average rating of the current dataset is:", avgRating.toFixed(2));

    // 2. AVERAGE PRICE
    const arrPrices = listings.map(function(ele){
      if (ele.price !== undefined){
        return parseFloat(ele.price);
      }
    });
    // removes the undefined part in the data
    arrPrices.pop(-1);
    const sumPrices = arrPrices.reduce(function(accum, ele){
      return accum + ele;
    }, 0.0);
    const avgPrice = sumPrices / listings.length;
    console.log("* Average price of the current dataset is:", avgPrice.toFixed(2));

    // 3. filtering!!
    const filteredListings = listings.filter(function(f){
      if (f.overall_satisfaction > 4.8 && f.price < 55 && f.accommodates > 6){
        return f;
      }
    });
    console.log("* All listings in the current dataset with a rating greater than 4.8, priced less than 55, and accommodating more than 6 people:");
    filteredListings.forEach(function(ele){
      console.log("\t* Listing ID:", ele.room_id, "with a rating of", ele.overall_satisfaction, "priced at", ele.price, "in", ele.city, "accommodates", ele.accommodates);
    });

    // 4. TWO HIGHEST REVIEWED LISTINGS
    // create a function that will get the 2 highest reviewed listings
    function findTwoMost(arr){
      let first = 0;
      let second = 0;
      for(let i = 0; i < arr.length; i++){
          if(first < arr[i]){
              second = first;
              first = arr[i];
          }else if(second < arr[i]){
              second = arr[i];
          }
      }
      const twoMost = [first, second];
      return twoMost;
    }
    const arrReviews = listings.map(function(ele){
      return parseFloat(ele.reviews);
    });
    const twoHighestReviewed = findTwoMost(arrReviews);
    let firstHighest;
    let secondHighest;
    listings.forEach(function(ele){
      if (ele.reviews === twoHighestReviewed[0].toString()){
        firstHighest = ele;
      }
      else if (ele.reviews === twoHighestReviewed[1].toString()){
        secondHighest = ele;
      }
    });
    console.log("* The two highest reviewed listings of the current dataset are:");
    console.log("\t* ID:", firstHighest.room_id, "in", firstHighest.city, "reviewed", firstHighest.reviews, "times and rated", firstHighest.overall_satisfaction);
    console.log("\t* ID:", secondHighest.room_id, "in", secondHighest.city, "reviewed", secondHighest.reviews, "times and rated", secondHighest.overall_satisfaction);

    // 5. BOUROUGH WITH MOST EXPENSIVE LISTINGS ON AVERAGE IN NYC (if NYC listings exist)
    let notNYCounter = 0;
    listings.forEach(function(ele){
      if(ele.city !== "New York"){
        notNYCounter++;
      }
    });
    if (notNYCounter === listings.length){
      console.log("This file has no data about NYC!\n");
    }
    else {
      /* you'll first need to get the aggregate price of all the listings by boroughs, followed by getting the total number of listings for each NYC borough. This will help you find the average price for each borough, you then need to find the one with the highest average price of listings. */
      const filteredNY = listings.filter(function(f){
        if (f.city === "New York"){
          return f;
        }
      });
      const manhattan = filteredNY.filter(function(f){
        if (f.borough === "Manhattan"){
          return f;
        }
      });
      const brooklyn = filteredNY.filter(function(f){
        if (f.borough === "Brooklyn"){
          return f;
        }
      });
      const queens = filteredNY.filter(function(f){
        if (f.borough === "Queens"){
          return f;
        }
      });
      const bronx = filteredNY.filter(function(f){
        if (f.borough === "Bronx"){
          return f;
        }
      });
      const staten = filteredNY.filter(function(f){
        if (f.borough === "Staten Island"){
          return f;
        }
      });

      // total price of Manhattan borough
      const arrManhattanPrices = manhattan.map(function(ele){
        return parseFloat(ele.price);
      });
      const sumManhattanPrices = arrManhattanPrices.reduce(function(accum, ele){
        return accum + ele;
      }, 0.0);
      // average prices of Manhattan borough
      const avgManhattan = sumManhattanPrices / arrManhattanPrices.length;

      // total price of Brooklyn borough
      const arrBrooklynPrices = brooklyn.map(function(ele){
        return parseFloat(ele.price);
      });
      const sumBrooklynPrices = arrBrooklynPrices.reduce(function(accum, ele){
        return accum + ele;
      }, 0.0);
      // average prices of Brooklyn borough
      const avgBrooklyn = sumBrooklynPrices / arrBrooklynPrices.length;

      // total price of Queens borough
      const arrQueensPrices = queens.map(function(ele){
        return parseFloat(ele.price);
      });
      const sumQueensPrices = arrQueensPrices.reduce(function(accum, ele){
        return accum + ele;
      }, 0.0);
      // average prices of Queens borough
      const avgQueens = sumQueensPrices / arrQueensPrices.length;

      // total price of Bronx borough
      const arrBronxPrices = bronx.map(function(ele){
        return parseFloat(ele.price);
      });
      const sumBronxPrices = arrBronxPrices.reduce(function(accum, ele){
        return accum + ele;
      }, 0.0);
      // average prices of Bronx borough
      const avgBronx = sumBronxPrices / arrBronxPrices.length;

      // total price of Staten borough
      const arrStatenPrices = staten.map(function(ele){
        return parseFloat(ele.price);
      });
      const sumStatenPrices = arrStatenPrices.reduce(function(accum, ele){
        return accum + ele;
      }, 0.0);
      // average prices of Staten borough
      const avgStaten = sumStatenPrices / arrStatenPrices.length;

      // NOW COMPARE AVERAGES AND GET HIGHEST
      const allAvg = [];
      allAvg.push(avgManhattan);
      allAvg.push(avgBrooklyn);
      allAvg.push(avgQueens);
      allAvg.push(avgBronx);
      allAvg.push(avgStaten);
      let highest = allAvg[0];
      for (let i = 0; i < allAvg.length; i++){
        if (highest < allAvg[i]){
          highest = allAvg[i];
        }
      }
      if (allAvg.indexOf(highest) === 0){
        console.log("* For the current dataset, Manhattan has the most expensive listings in NYC with an average listing price of", highest.toFixed(2), "\n");
      }
      else if (allAvg.indexOf(highest) === 1){
        console.log("* For the current dataset, Brooklyn has the most expensive listings in NYC with an average listing price of", highest.toFixed(2), "\n");
      }
      else if (allAvg.indexOf(highest) === 2){
        console.log("* For the current dataset, Queens has the most expensive listings in NYC with an average listing price of", highest.toFixed(2), "\n");
      }
      else if (allAvg.indexOf(highest) === 3){
        console.log("* For the current dataset, Bronx has the most expensive listings in NYC with an average listing price of", highest.toFixed(2), "\n");
      }
      else {
        console.log("* For the current dataset, Staten Island has the most expensive listings in NYC with an average listing price of", highest.toFixed(2), "\n");
      }
    }
  }
};

module.exports = rev;
