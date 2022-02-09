use people

(function() {
  var names = [
    'Yolanda',
    'Iska',
    'Malone',
    'Frank',
    'Foxton',
    'Pirate',
    'Poppelhoffen',
    'Elbow',
    'Fluffy',
    'Paphat'
  ]
  var randName = function() {
    var n = names.length;
    return [
      names[Math.floor(Math.random() * n)],
      names[Math.floor(Math.random() * n)]
    ].join(' ');
  }
  var randAge = function(n) {
    return Math.floor(Math.random() * n);
  }
  for (var i = 0; i < 1000; ++i) {
    var person = {
      name: randName(),
      age: randAge(100)
    }
    if (Math.random() > 0.8) {
      person.cat = {
        name: randName(),
        age: randAge(18)
      }
    }
    db.people.insert(person);
  };
})();

// Examine the dataset
db.people.find({})

// Question 1
// Use find to get all the people who are exactly 99 years old
// Result may vary.
db.people.find(
    {"age" : 99}
)

// Question 2
// Find all the people who are eligible for a bus pass (people older than 65)
// Result may vary.
db.people.find(
    {"age" : {$gt : 65}}
)

// Question 3
// Find all the teenagers, greater than 12 and less than 20.
// Result may vary.
db.people.find(
    {"age" : {$gt : 12, $lt : 20}}
)

// Question 4
// Find all the teenagers with cats.
// Result may vary.
db.people.find(
    {$and : [{"age" : {$gt : 12, $lt : 20}},
             {"cat" : {$exists : true}}]}
)

// Question 5
// Use $where to find all the people who have a cat.
db.people.find(
    {$where : "this.cat"}
)

// Question 6
// Find all the people who are younger than their cats.
// Remember, not everyone has a cat.

// A WRONG solution
// db.people.find(
//     {"age" : {$lt : "cat.age"}}
// )

// Another WRONG solution
// db.people.find(
//     {$where : "this.cat.age > this.age"}
// )

db.people.find(
    {$where : "this.cat && this.cat.age > this.age"}
)

// Question 7
// Does anyone have the same name as their cat?
// Remember, not everyone has a cat.
db.people.find(
    {$where : "this.cat && this.cat.name == this.name"}
)

// Question 8
// Output only all the cat information.
// When you output the cats, you will need to find only people who have cats, where cats $exists, 
// or you will have gaps in your data.
db.people.find(
    {"cat" : {$exists : true}},
    {"cat" : 1, "_id" : 0}
)

// Question 9
// Find out how many people there are in total.
db.people.find({}).count()

// Question 10
// How many people have cats?
db.people.find({"cat" : {$exists : true}}).count()

// Question 11
// Use $where to count how many people have cats which are older than them.
db.people.find(
    {$where : "this.cat && this.cat.age > this.age"}
).count()

// Question 12
// Find the youngest 1 person with a cat.
db.people.find(
     {"cat" : {$exists : true}}
).sort({"age" : 1}).limit(1);

// Question 13
// Find the names and ages of the youngest 5 teenagers with cats,
// where the cats have the word "Yolanda" in their name.
db.people.find(
    {$and : [{"age" : {$gt : 12, $lt : 20}},
             {"cat" : {$exists : true}},
             {"cat.name" : {$regex : "\w*Yolanda\w*",
                            $options : "m"}}]},
    {"name" : 1, "age" : 1, "_id" : 0}
).sort({"age" : 1}).limit(5)

// Question 14
// Find the names of 5 oldest cats.
db.people.find(
    {"cat" : {$exists : true}},
    {"cat.name" : 1, "_id" : 0}
).sort({"cat.age" : -1}).limit(5)

// Question 15
// Find the names of the next 5 oldest cats after question 14.
db.people.find(
    {"cat" : {$exists : true}},
    {"cat.name" : 1, "_id" : 0}
).sort({"cat.age" : -1}).skip(5).limit(5)

db.people.drop()


