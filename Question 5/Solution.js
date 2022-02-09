// Load data
// mongoimport --db prizes --collection prizes --file ./data/prize.json

use prizes
db.prizes.find({})

// Question 1
// Find the first names of economics laureates for year 2021.
db.prizes.find(
    {"prizes.year" : 2021}
)