// Import data
// mongoimport --db stocks --collection stocks --file ./data/stocks.json

use stocks
db.stocks.find({});

// Question 1
// Find me the top 10 most profitable stocks
db.stocks.find(
    {},
    {"Ticker" : 1, "_id" : 0}
).sort({"Performance (Year)" : 1}).limit(10);

// Question 2
// Add a projection, tell me which sector the most profitable stocks are in.
db.stocks.aggregate([
    {$group : 
        {_id : "$Sector",
         count : {$sum : 1},
         avgPerformance : {$avg : "$Performance (Year)"}}
    },
    {$sort : {"avgPerformance" : -1}},
    {$project : 
        {"_id" : 1}},
    {$limit : 1}
]);

// Question 3
// Which is the least profitable sector.
db.stocks.aggregate([
    {$group : 
        {_id : "$Sector",
         count : {$sum : 1},
         avgPerformance : {$avg : "$Performance (Year)"}}
    },
    {$sort : {"avgPerformance" : 1}},
    {$project : 
        {"_id" : 1}},
    {$limit : 1}
]);


// Question 4
// Iterate over the cursor and output all of the stocks names and tickers in order of profit.
db.stocks.find(
    {}
).sort(
    {"Performance (Year)" : 1}
).forEach(function(stock) {
    print(stock.Company, stock.Ticker);
});

// Question 5
// Use Map to generate an array containing all of the stocks names.
// Print the third element in this array.
var array = db.stocks.find(
    {}
).map(function(stock) {
  return stock.Company;
});
print(array[2]);




