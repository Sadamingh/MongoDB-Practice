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


// Question 2
// Find all the people who are eligible for a bus pass (people older than 65)
// Result may vary.


// Question 3
// Find all the teenagers, greater than 12 and less than 20.
// Result may vary.


// Question 4
// Find all the teenagers with cats.
// Result may vary.


// Question 5
// Use $where to find all the people who have a cat.


// Question 6
// Find all the people who are younger than their cats.
// Remember, not everyone has a cat.


// Question 7
// Does anyone have the same name as their cat?
// Remember, not everyone has a cat.


// Question 8
// Output only all the cat information.
// When you output the cats, you will need to find only people who have cats, where cats $exists, 
// or you will have gaps in your data.


// Question 9
// Find out how many people there are in total.


// Question 10
// How many people have cats?


// Question 11
// Use $where to count how many people have cats which are older than them.


// Question 12
// Find the youngest 1 person with a cat.


// Question 13
// Find the names and ages of the youngest 5 teenagers with cats,
// where the cats have the word "Yolanda" in their name.


// Question 14
// Find the names of 5 oldest cats.


// Question 15
// Find the names of the next 5 oldest cats after question 14.


db.people.drop()


