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