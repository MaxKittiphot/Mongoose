const mongoose = require("mongoose");

// connect to Database
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// create new schema
const fruitSchema = new mongoose.Schema ({
  //structure of document
  name: String,
  rating: Number,
  review: String
});

// create schema with validation
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  score: {
    type: Number,
    min: 0,
    max:100
  },
  age: Number,
  favouriteFruit: fruitSchema
});

// use schema to create model similar to collection
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Perfect!"
});

fruit.save();

// insert many
Fruit.insertMany([fruit1, fruit2], fucntion(err){
  if(err){
    console.log(err);
  } else {
    console.log("Successfully save all the fruits");
  }
});

// Read
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {
    console.log(fruits);
  }
});

// Update and Delete
Fruit.updateOne({_id:"12345"}, {name: "Rare Orange"}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Update Successfully");
  }
});

Fruit.deleteOne({id:"12345"}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Delete Successfully");
  }
});


// end the connection
mongoose.connection.close();
