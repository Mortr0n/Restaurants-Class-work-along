// controller makes a good 3rd step move on to model after health check

const Restaurant = require("../models/restaurant.model");

// good way to test is start with a healthcheck first
const healthcheckController = (req, res) => {
    res.send("controller is set up");
};
// need the controller item and the route item in order to use that piece of the api
const createNewRestaurant = (req, res) => {
    const { body } = req; // can deconstruct the body off of request
    // console.log(body);
  // res.send("Got here!") for testing that its working add 
    Restaurant.create( body )
    .then((newRestaurant) => {
        console.log(newRestaurant);
        res.json(newRestaurant);
    })
    // the class way of the errors.  setting the page status to 400
    // Need this way for validations
    .catch((err) => res.status(400).json(err));
};

const findAllRestaurants = (req, res) => {
    Restaurant.find()
        .then((allRestaurants) => {
            console.log(allRestaurants);
            res.json(allRestaurants);
        })
        .catch((err) => res.status(400).json({ errMessage: err }));
}

const findOneRestaurant = (req, res) => {
    Restaurant.findOne ( {_id: req.params.id} )
        .then((oneRestaurant) => {
            console.log(oneRestaurant);
            res.json(oneRestaurant);
        })
        .catch((err) => res.status(400).json({ errMessage: err }));
}

const deleteRestaurant = (req, res) => {
    Restaurant.findByIdAndDelete({ _id: req.params.id })
        .then((restaurantToDelete) => {
            console.log(restaurantToDelete);
            res.json(restaurantToDelete);
        })
        .catch((err) => res.status(400).json({ errMessage: err }));
}

const updateRestaurant = (req, res) => {
    // With update there are 3 initial items for the function to take in
    Restaurant.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        // add run validators for validations here in the update
        { new: true, runValidators: true }
        )
        .then((updatedRestaurant) => {
            console.log(updatedRestaurant);
            res.json(updatedRestaurant);
        })
        // Make sure your catch has the ability to display the json object error
        .catch((err) => {res.status(400).json({ message: 'Validation Error', error: err})});
}

module.exports = {
  // exporting the routes.  I like how I did it in the class
  // follow in mongoose/classMongoose/back-end it's less broken up
    healthcheckController,
    createNewRestaurant,
    findAllRestaurants,
    findOneRestaurant,
    deleteRestaurant,
    updateRestaurant,

};
