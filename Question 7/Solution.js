// Import data
// mongoimport --db enron --collection enron --file ./data/enron.json

use enron
db.enron.find({})

// Question 1
// List all the unique senders.
db.enron.aggregate([
    {$group : {_id : "$sender"}}
])

// Question 2
// Put all the unique sends in an array with field name senders.
db.enron.aggregate([
    {$group : {_id : "$sender"}},
    {$group : 
        {_id : 1, 
         senders : {$push : "$_id"}}},
    {$project : {_id : 0, senders : 1}}
])

// Question 3
// Count all the unique senders.
db.enron.aggregate([
    {$group : {_id : "$sender"}},
    {$group : 
        {_id : 1, 
         count : {$sum : 1}}},
    {$project : {_id : 0, count : 1}}
])

// Question 4
// Group by sender and count to find out which email address sent the most emails.
db.enron.aggregate([
    {$group : 
        {_id : "$sender", 
         count : {$sum : 1}}},
    {$sort : 
        {count : -1}}, 
    {$limit : 1}
])

// Question 5
// Rank the senders in order of emails sent.
db.enron.aggregate([
    
    {$sort : {date : 1}},
    {$project : 
        {_id : 0,
         sender : 1,
         rank : {$add : 1}}}
])

// Question 6
// Take the Enron dataset and group by sender.
// Push $$ROOT into the customer field. You now have the emails handily grouped by sender.
db.enron.aggregate([
    {$group : 
        {_id : "$sender",
         customer : {$push : "$$ROOT"}}}
])

// Question 7
// 







