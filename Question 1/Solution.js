use petshop

db.pets.insert({name: "Mikey", species: "Gerbil"})
db.pets.insert({name: "Davey Bungooligan", species: "Piranha"})
db.pets.insert({name: "Suzy B", species: "Cat"})
db.pets.insert({name: "Mikey", species: "Hotdog"})
db.pets.insert({name: "Terrence", species: "Sausagedog"})
db.pets.insert({name: "Philomena Jones", species: "Cat"})

// Question 1
// Add another piranha, and a naked mole rat called Henry.
db.pets.insertMany([{name: "Henry", species: "Piranha"},
                    {name: "Henry", species: "Naked Mole Rat"}])

// Question 2
// Use find to list all the pets. Find the ID of Mikey the Gerbil.
db.pets.find({})
db.pets.find(
    {"name" : "Mikey", "species" : "Gerbil"},
    {"_id" : 1}
)

// Question 3
// Use find to find Mikey by id.
// This should be based on the last question. The solution is not unique.
db.pets.find(
    {"_id" : ObjectId("620365508969a75196ad6f09")}
)

// Question 4
// Use find to find all the gerbils.
db.pets.find(
    {"species" : "Gerbil"}
)


// Question 5
// Find all the creatures named Mikey.
db.pets.find(
    {"name" : "Mikey"}
)


// Question 6
// Find all the creatures with the string "dog" in their species.
db.pets.find(
    {"species" : {$regex : "\w*dog\w*"}}
)


db.pets.drop()