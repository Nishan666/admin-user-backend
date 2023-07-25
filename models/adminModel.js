const mongoose = require('mongoose');
const adminSchema = require('../schemas/adminSchema');

const adminModel = mongoose.model('Admin',adminSchema);

module.exports = adminModel;

