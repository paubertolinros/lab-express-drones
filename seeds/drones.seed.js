// Iteration #1
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Drone = require('../models/Drone.model');
const MONGO_URI = "mongodb://localhost/lab-express-drones";
const drones = require('../db/data');

mongoose.connect(MONGO_URI)
  .then(response => console.log(`Connected to the DRONES DB ${response.connection.name}`))
  .then(() => {
  return Drone.deleteMany()
  })
  .then(() => {
  return Drone.create(drones)
  })
  .then(createdDrones => console.log(`Inserted ${createdDrones.length} presents in the database`))
  .then(() => mongoose.connection.close())
  .catch(err => console.error(err))