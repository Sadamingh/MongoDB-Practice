# MongoDB-Practice

#### 1 Setup

```bash
source setup.sh
```



#### 2 Problem Sets

- **Question 1**: Basic create and read operations
- **Question 2**: Basic CRUD, cursor methods
- **Question 3**: Cursor iteration, aggregation
- **Question 4**: Query an array
- **Question 5**: Query an array with documents



#### 3 Interview Questions

* What is the meaning of CRUD?

```
Creat Read Update Delete
```

* What's the meaning of ACID transaction?

```
Atomic, Consistent, Isolated, Durable
```

* MongoDB is a document database.

```
True
```

* MongoDB is an aggregate-oriented database.

```
True
```

* MongoDB don't have ACID transactions.

```
True
```

* Relationship-oriented databases are not designed to run on a cluster.

```
True
```

* The development of NoSQL does not replace RDBMS.

```
True
```

* Every document in MongoDB must have an `_id` key.

```
True
```

* What information can we obtain from an `_id` key?

```
timestamp, machine hash, process id
```

* What is the default type of the `_id` key?

```
ObjectId
```

* How long is an `_id` key?

```
12 bytes
```

* What is the default type of the `Date()` value?

```
ISODate
```

* What command should we use to start Mongo DB service?

```
mongod --dbpath
```

* What command should we use to import JSON data?

```
mongoimport
```

* What option should we assign when we want to import data to a database?

```
--db
```

* What option should we assign when we want to import data to a collection?

```
--collection
```

* What option should we assign when we need to assign the imported data path?

```
--file
```

* Which `--mode` should we choose when we need to replace the existed documents?

```
upsert
```

* Which `--mode` should we choose when we need to keep the existed documents?

```
insert
```

* Will there be a value of `3` for `age` field in the `friends` collection after this update?

```
db.friends.updateMany({}, {$min : {"age" : 1}})
```

Answer:

```
No.
```

* Will there be a value of `1` for `age` field in the `friends` collection after this update?

```
db.friends.updateMany({}, {$min : {"age" : 1}})
```

Answer:

```
Yes.
```

* What will be the value of `age` field after these updates?

```
db.friends.updateMany({}, {$min : {"age" : 1}})
db.friends.updateMany({}, {$max : {"age" : 0}})
```

Answer:

```
Between 0 and 1.
```

* What will be the value of `age` field after these updates?

```
db.friends.updateMany({}, {$min : {"age" : 1}})
db.friends.updateMany({}, {$max : {"age" : 2}})
```

Answer:

```
All the values should be 2.
```

* `.drop()` is better than `.deleteMany()` if you want to delete a collection.

```
True
```

* What's the meaning of `^` in regex?

```
the beginning of the string
```

* What's the meaning of `$` in regex?

```
the ending of the string
```

* What's the meaning of `.*` in regex?

```
any string
```

* What's the meaning of `.+` in regex?

```
any string with at least one character
```

* What pattern means any non-whitespace characters?

```
\S
```

* What pattern means any non-digit characters?

```
\D
```

* Which option means case insensitivity in regex?

```
i
```

* Which option means to include the multilines in regex?

```
m
```

* Which option means to ignore whitespaces in regex?

```
x
```

* Which option means to allow `.` for matching new lines in regex?

```
s
```

* What will we get from the array `[1,2,3,4,5]` if we have `{$slice : 1}`?

```
[1]
```

* What will we get from the array `[1,2,3,4,5]` if we have `{$slice : -1}`?

```
[5]
```

* What will we get from the array `[1,2,3,4,5]` if we have `{$slice : [1,2]}`?

```
[2,3]
```

* What will we get from the array `[1,2,3,4,5]` if we have `{$slice : [2,1]}`?

```
[3]
```

* Array modifier `$` can be used in projection.

```
True
```

* What are the projection operators?

```
$, $slice, $elemMatch
```

* What are the two ways of data distribution?

```
sharding, replication
```

* What is sharding?

```
Distributing data into different servers, and each of them does its own reads and writes.
```

* What is the benefit of sharding?

```
improve reads and writes
```

* What is the downside of sharding?

```
low resilience
```

* What is `mongod`?

```
They are the primary database process that runs on an individual server.
```

* What is `mongos`?

```
They are routing process to manage storing different data on different servers and query against the right server.
```

* What are the two types of replication?

```
primary-secondary replication, peer-to-peer replication
```

* What is primary-secondary replication?

```
Synchronize secondaries with primary, which means the scondaries only contains copied data from a master.The primary is responsible for processing updates and act as an authoritative source for the data.
```

* What are the benefits of replications?

```
It provides good scalability with intensive read with read resilience.
```

* What are the drawbacks of replications?

```
It is poor with intensive writes and its inconsistency.
```

* What is the benefits of combining sharding and replications?

```
- scability
- fault tolerance
```

* What is CAP theorem?

```
You can only et two from consistency, avaliability, or partition tolerance.
```

* ACID addresses an individual node's data consistency.

```
True
```

* CAP addresses cluster-wide data consistency.

```
True
```

* What's the meaning of consistency?

```
all nodes have the most recent data
```

* What's the meaning of availability?

```
every request receive by a non-failing node must return a response
```

* What's the meaning of partition tolerance?

```
clusters can survive from communication breakages in the cluster
```

* If we must have partition tolerance, what must we have for a online shopping database?

```
availability
```

* If we must have partition tolerance, what must we have for a stock database?

```
consistency
```

* What are the two of CAP Mogodb supports?

```
consistency, partition tolerance
```

* Which method should we call for creating an index?

```
createIndex
```

* Which method should we call for listing the current indexes?

```
getIndexes
```

* Which method should we call to drop or remove an index?

```
dropIndex
```

* Which method should we call to rebuild index an index?

```
reIndex
```

* What's the value if we want to create a binary tree index?

```
1 or -1
```

* What's the value if we want to create a hashed index?

```
hashed
```

* How many documents should we examine if we have no index on finding?

```
all the documents
```

* For read-heavy applications, deploy sharding and add one or more shards to a sharded cluster to distribute load among mongod instances.

```
False
```

* For read-heavy applications, increase the size of your replica set and distribute read operations to secondary members.

```
True
```

* What's the output of the following code?

```
db.posts.find( { likes : { $gt : 200 }, likes : { $lt : 400 } } );
```

Answer:

```
Posts documents with like field less than 400.
```

* What is the output of the following query:

```
db.posts.aggregate( [ { $group: { _id: “$author”, x: { $sum: $likes } } } ] )
```

Answer:

```
Sum of all likes on all posts by an author, grouped by author
```

* What is the opposite operation of `$unwind`?

```
$push
```

* Given the following posts document:

```
{
    "_id" : 1,
    "post_text" : "This post does not matter",
    "tags": [ "tutorial", "fun", "learning"],
    // rest of the document
}
```

What will be the output of following query: 

```
db.posts.aggregate([{$unwind: "$tags"}])
```

Answer:

```
Return three separate documents for three separate tags
```

* Consider the following collection:

```
{
_id: 1,
product: “345678”,
variations: [
{ size: “L”, price: 1000 },
{ size: “M”, price: 800 }
]
}
```

What will the below query return?

```
db.products.find( { product: “345678” },
{ variations: { $elemMatch: { size: "L" } } } )
```

Answer:

```
Returns document but with only one element in the variations array
```

* Which method will return information on the query plan for aggregate function?

```
explain
```

* How can we get the number of executions for a query?

```
.explain("executionStats")
```

* Which of the following command inside aggregate command is used in MongoDB aggregation to filter the documents to pass only the documents that match the specified conditions to the next pipeline stage.

```
$match
```

* What does the following aggregate query perform?

```
db.posts.aggregate( [
    { $match : { likes : { $gt : 100, $lte : 200 } } },
    { $group: { _id: null, count: { $sum: 1 } } }
] );
```

```
Calculates the number of posts with likes between 100 and 200
```

* Which of the following aggregation option is used to specify the specific fields that needs to be passed to the next stage of the aggregation pipeline?

```
$project
```

* Which operator should we use when joining two collections?

```
$lookup
```

* What's the join type for `$lookup`?

```
left-outer join
```

* How to assign a collection to join?

```
from
```

* How to select the matching field for joining two collections?

```
assigning localField and foreignField, this means to match localField = foreignField
```