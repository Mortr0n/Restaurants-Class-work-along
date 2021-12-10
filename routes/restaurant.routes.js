const restaurantController = require('../controllers/restaurant.controller');

// Do routes 2nd and then import them to the server.js
module.exports = (app) => {
    // healthcheck for making sure routes are running before moving on
    // check with postman before moving on
    // app.get('/api/healthcheck', (req, res) => {
    //     res.send("Good to Go!");
    // } )

    // Next remove the old temporary app.get from above and app.get the healthcheckController
    app.get("/api/healthcheck", restaurantController.healthcheckController);
    app.post('/api/restaurant/', restaurantController.createNewRestaurant);
    app.get('/api/restaurant', restaurantController.findAllRestaurants);
    // the ones needing ID must come after the non id ones, specifically the GET one
    app.get('/api/restaurant/:id', restaurantController.findOneRestaurant);
    app.delete('/api/restaurant/:id', restaurantController.deleteRestaurant);
    app.put('/api/restaurant/:id', restaurantController.updateRestaurant);

}
// move to controllers after this