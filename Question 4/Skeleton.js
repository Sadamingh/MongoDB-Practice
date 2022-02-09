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


// Question 2
// Find all the documents with tags of "red" and "blank".


// Question 3
// Find all the documents with tag "red".


// Question 4
// Find all the documents with one element in dim_cm greater or equal than 15
// AND less or equal than 20.


// Question 5
// Find all the documents with the third element in tags.


// Question 6
// Find all the documents with the second element in dim_cm greater or equal than 20
// AND less than 25.


// Question 7
// Update the third element in tags to "blue"
// if the third element in tags exists.


// Question 8
// Update the all elements in tag matches "blue" to "blank"
// for all the documents.


// Question 9
// Append "green" to tag for all the documents with "red" tag.



// Question 10
// Remove the "blank" tag in all the documents.


// Question 11
// Remove "tags" field if this field has an empty array.


db.inventory.drop()