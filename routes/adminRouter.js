const express = require('express');

const adminLoginRoute = require('../controllers/adminAuth/adminLogin');
const adminSignupRoute = require('../controllers/adminAuth/adminSignup');

const adminRouter = express.Router();

adminRouter.post('/login',adminLoginRoute);
adminRouter.post('/signup',adminSignupRoute);

module.exports = adminRouter;