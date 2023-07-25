const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
},{timestamps : true});

module.exports = adminSchema;
