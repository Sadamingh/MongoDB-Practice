use inventory

db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
   { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
   { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
   { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
   { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
]);

// Question 1
// Find all the documents with tags of "red" and "blank" in the order ["blank", "red"].
db.inventory.find(
    {"tags" : ["blank", "red"]}
)

// Question 2
// Find all the documents with tags of "red" and "blank".
db.inventory.find(
    {"tags" : 
        {$all : ["blank", "red"]}}
)

// Question 3
// Find all the documents with tag "red".
db.inventory.find(
    {"tags" : "red"}
)

// Question 4
// Find all the documents with one element in dim_cm greater or equal than 15
// AND less or equal than 20.
db.inventory.find(
    {"dim_cm" : 
        {$elemMatch : 
            {$gte : 15,
             $lte : 20}}}
)

// Question 5
// Find all the documents with the third element in tags.
db.inventory.find(
    {"tags.2" : {$exists : true}}
)

// Question 6
// Find all the documents with the second element in dim_cm greater or equal than 20
// AND less than 25.
db.inventory.find(
    {"dim_cm.1" : 
        {$gte : 20,
         $lt : 25}}
)

// Question 7
// Update the third element in tags to "blue"
// if the third element in tags exists.
db.inventory.updateMany(
    {"tags.2" : {$exists : true}},
    {$set : {"tags.2" : "blue"}}
)
db.inventory.find(
    {"tags.2" : {$exists : true}}
)

// Question 8
// Update the all elements in tag matches "blue" to "blank"
// for all the documents.
db.inventory.updateMany(
    {},
    {$set : {"tags.$[elem]" : "blank"}},
    {arrayFilters : [
        {elem : "blue"}]}
)
db.inventory.find(
    {"tags" : "blank"}
)

// Question 9
// Append "green" to tag for all the documents with "red" tag.
db.inventory.updateMany(
    {"tags" : "red"},
    {$push : {"tags" : "green"}},
)
db.inventory.find({})


// Question 10
// Remove the "blank" tag in all the documents.
db.inventory.updateMany(
    {},
    {$pull : {"tags" : "blank"}},
)
db.inventory.find({})

// Question 11
// Remove "tags" field if this field has an empty array.
db.inventory.updateMany(
    {"tags.0" : {$exists : false}},
    {$unset : {"tags" : ""}}
)
db.inventory.find({"item" : "postcard"})

db.inventory.drop()