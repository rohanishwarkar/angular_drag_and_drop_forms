const mongoose = require('mongoose');

var Form = mongoose.model('Form', {
    name:{
        type: String,
    },
    components: { 
        type: String 
    }
});

module.exports = { Form };