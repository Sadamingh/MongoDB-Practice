// Import data
// mongoimport --db zips --collection zips --file ./data/zips.json

use zips
db.zips.findOne()

// Question 1
// Find all the zip codes in Massachusetts (state:'MA").


// Question 2
// Find all the zip codes with a population less than 1000.


// Question 3
// Add a new field called address with the format "city-state".


// Question 4
// Add a new field called bigcity and set it as True for all city with population grater than 10000.


// Question 5
// Count how many zipcodes per state.


// Question 6
// Put all the zipcodes from the same state in an array with field name zipcodes.


// Question 7
// Put all the documents from the same state in an array with field name info.


// Question 8
// Get the population of each state.


// Question 9
// Get the population of each city.


// Question 10
// Group by city and state, get the population for each group.

