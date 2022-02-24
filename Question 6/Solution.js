// Import data
// mongoimport --db zips --collection zips --file ./data/zips.json

use zips
db.zips.findOne()

// Question 1
// Find all the zip codes in Massachusetts (state:'MA").
db.zips.aggregate([
    {$match : {"state" : "MA"}},
    {$project : {"_id" : 1}}
])


// Question 2
// Find all the zip codes with a population less than 1000.
db.zips.aggregate([
    {$match : {"pop" : {$lt : 1000}}},
    {$project : {"_id" : 1}}
])

// Question 3
// Add a new field called address with the format "city-state".
db.zips.aggregate([
    {$project : 
        {_id : 1, city : 1, loc : 1, pop : 1, state : 1, 
         address : {$concat : ['$city', '-', '$state']}}}
])

// Question 4
// Add a new field called bigcity and set it as True for all city with population grater than 10000.
db.zips.aggregate([
    {$match : {"city" : "SAN FRANCISCO"}},
    {$project : 
        {_id : 1, city : 1, loc : 1, pop : 1, state : 1,
         bigcity : {$cond : {if : {$gt : ['$pop', 10000]}, then : true, else : false}}}}
])

// Question 5
// Count how many zipcodes per state.
db.zips.aggregate([
    {$group : 
        {_id : "$state",
         count : {$sum : 1}}}
])

// Question 6
// Put all the zipcodes from the same state in an array with field name zipcodes.
db.zips.aggregate([
    {$group : 
        {_id : "$state",
         zipcodes : {$push : "$_id"}}}
])

// Question 7
// Put all the documents from the same state in an array with field name info.
db.zips.aggregate([
    {$group : 
        {_id : "$state",
         info : {$push : "$$ROOT"}}}
])

// Question 8
// Get the population of each state.
db.zips.aggregate([
    {$group : 
        {_id : "$state",
         pop : {$sum : "$pop"}}}
])

// Question 9
// Get the population of each city.
db.zips.aggregate([
    {$group : 
        {_id : "$city",
         pop : {$sum : "$pop"}}}
])

// Question 10
// Group by city and state, get the population for each group.
db.zips.aggregate([
    {$group : 
        {_id : 
            {state : "$state", city : "$city"},
         pop : {$sum : "$pop"}}}
])
