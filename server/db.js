const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Forms', (err) => {
    if (!err) console.log('Successfully Connected to Database!');
    else console.log('Error in Database connection : ' + JSON.stringify(err, undefined, 2));
});
module.exports = mongoose;