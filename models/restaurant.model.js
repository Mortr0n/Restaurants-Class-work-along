// 4th item and then move back to controllers to write the controllers
const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    //  in class he did below, but I like doing the full way so I can add validations 
    //  name: String,
    name: {
        type: String,
        // validations in the model
        required: [true, "A restaurant name is required!"],
        minlength: [2, "Restuarant name must be at least 2 characters"],
        maxlength: [50, "Restaurant name must be under 50 characters long"],
        
    },

    address: {
        type: String,
        // validations in the model
        required: [true, "Must have an address for your restaurant"],
        minlength: [5, "Address must be at least 5 characters long"],
        maxlength: [200, "Address must be under 200 characters long"]
    },

}, { timestamps: true });


const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;