use petshop

db.pets.insert({name: "Mikey", species: "Gerbil"})
db.pets.insert({name: "Davey Bungooligan", species: "Piranha"})
db.pets.insert({name: "Suzy B", species: "Cat"})
db.pets.insert({name: "Mikey", species: "Hotdog"})
db.pets.insert({name: "Terrence", species: "Sausagedog"})
db.pets.insert({name: "Philomena Jones", species: "Cat"})

// Question 1
// Add another piranha, and a naked mole rat called Henry.


// Question 2
// Use find to list all the pets. Find the ID of Mikey the Gerbil.


// Question 3
// Use find to find Mikey by id.
// This should be based on the last question. The solution is not unique.


// Question 4
// Use find to find all the gerbils.


// Question 5
// Find all the creatures named Mikey.


// Question 6
// Find all the creatures with the string "dog" in their species.


db.pets.drop()