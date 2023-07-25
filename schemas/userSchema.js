const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        require : true
    },
    photo : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        require : true
    },
    password : {
        type : String,
        require : true
    }
},{timestamps : true});

module.exports = userSchema;