const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model");

/* GET - Home page */
/* ROUTE /drones*/
router.get('/drones', async (req, res, next) => {
  try {
    const drones = await Drone.find({})
    res.render('list', { drones })
  } catch (error) {
    next(error)
  }
});

/* GET - Show a form to create a drone */
/* ROUTE /drones/create*/
router.get('/drones/create', (req, res, next) => {
  try {
    res.render('create-form')
  } catch (error) {
    next(error)
  }
});

/* POST - Save a drone to the database */
/* ROUTE /drones/create*/
router.post('/drones/create', async (req, res, next) => {
  const { image, name, propellers, maxSpeed } = req.body;
  try {
    await Drone.create({ name, image, propellers, maxSpeed });
    res.redirect('/drones');
  } catch (error) {
    //next(error);
    //res.redirect('/drones/create')
    res.render('create-form')
  }
});

/* GET - Show a form to update a drone */
/* ROUTE /drones/:id/edit*/
router.get('/drones/:droneId/edit', async (req, res, next) => {
  const { droneId } = req.params;
  try {
    const droneById = await Drone.findById(droneId);
    res.render('update-form', droneById );
  } catch (error) {
    next(error)
  }
});

/* POST - Save updated drone to the database */
/* ROUTE /drones/:id/edit*/
router.post('/drones/:droneId/edit', async (req, res, next) => {
  const { droneId } = req.params;
  const { image, name, propellers, maxSpeed } = req.body;
  try {
    await Drone.findByIdAndUpdate(droneId, { image, name, propellers, maxSpeed }, { new: true });
    res.redirect('/drones');
  } catch (error) {
    //next(error);
    //res.redirect(`/drones/${droneId}/edit`)
    const droneById = await Drone.findById(droneId);
    res.render('update-form', droneById);
  }
});

/* POST - Delete a specific drone from the database */
/* ROUTE /drones/:id/delete*/
router.post('/drones/:droneId/delete', async (req, res, next) => {
  const { droneId } = req.params;
  try {
    await Drone.findByIdAndDelete(droneId);
    res.redirect('/drones');
  } catch (error) {
    next(error)
  }
});

module.exports = router;
