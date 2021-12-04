// set up config 1st and then import it to server.js and nodemon it to make sure it's working
const mongoose = require('mongoose');

const dbName = "restaurants";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    // these next two items take away the deprecation warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established connection to the ${dbName} database`))
    .catch((err) => console.log(`Something has gone wrong with attempting to connect to the ${dbName} database`, err));