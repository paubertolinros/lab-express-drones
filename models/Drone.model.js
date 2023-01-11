// Iteration #1
const mongoose = require('mongoose');
const { Schema } = mongoose;

const droneSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is mandatory. Please add a name']
  },
  propellers: {
    type: Number,
    min: 0,
    required: [true, 'Propellers is mandatory. Please add propellers']
  },
  maxSpeed: {
    type: Number,
    min: 0,
    required: [true, 'Max speed is mandatory. Please add Max speed']
  },
  image: {
    type: String,
    default: 'https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg'
  }
});

const Drone = mongoose.model('Drone', droneSchema);
module.exports = Drone;