// Load data
db.inventory.drop()
use inventory

db.inventory.insertMany( [
   { item: "journal", instock: [ { warehouse: "A", qty: 5 }, { warehouse: "C", qty: 15 } ] },
   { item: "notebook", instock: [ { warehouse: "C", qty: 5 } ] },
   { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 15 } ] },
   { item: "planner", instock: [ { warehouse: "A", qty: 5 }, { warehouse: "B", qty: 5 } ] },
   { item: "postcard", instock: [ { warehouse: "B", qty: 15 }, { warehouse: "C", qty: 35 } ] }
]);

// Question 1
// Find all the documents with at least one instock quantity less than 10.
db.inventory.find(
    {"instock.qty" : {$lt : 10}}
)

// Question 2
// Find all the documents with the first instock quantity less than 10.
db.inventory.find(
    {"instock.0.qty" : {$lt : 10}}
)

// Question 3
// Find all the documents with one instock quantity greater than 10 and less than 20.
db.inventory.find(
    {"instock" : 
        {$elemMatch : 
            {"qty" : {$gt : 10, $lt : 20}}}}
)

// Question 4
// Find all the documents with the second instock quantity greater than 10 and less than 20.
db.inventory.find(
    {"instock.1.qty" : 
        {$gt : 10, $lt : 20}}
)

// Question 5
// Update all the documents with instock quantity greater than 20 to warehouse A,
// with instock quantity greater or equal than 10 and less or equal to 20 to warehouse B,
// with instock quantity less than 10 to warehouse C.
db.inventory.updateMany(
    {},
    {$set : {"instock.$[elem].warehouse" : "A"}},
    {arrayFilters : [{"elem.qty" : {$gt : 20}}]}
)
db.inventory.updateMany(
    {},
    {$set : {"instock.$[elem].warehouse" : "B"}},
    {arrayFilters : [{"elem.qty" : {$gte : 10, $lte : 20}}]}
)
db.inventory.updateMany(
    {},
    {$set : {"instock.$[elem].warehouse" : "C"}},
    {arrayFilters : [{"elem.qty" : {$lt : 10}}]}
)
db.inventory.find({})


