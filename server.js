// Set up server.js with mongoose.config to start
const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));


// these next 4 lines are part of step 2 routes
const restaurantRoutes = require('./routes/restaurant.routes');
restaurantRoutes(app);
// Shorthand Below:
// require('./routes/restaurant.routes)(app);


// the listening is part of step 1
const port = 8000;
app.listen(port, () => console.log(`The server is up and running on localhost:${port}`));
