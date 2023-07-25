const express = require('express');
const userLoginRoute = require('../controllers/userAuth/userLogin');
const userSignupRoute = require('../controllers/userAuth/userSignup');
const upload = require('../multer/setup');

const requireToken = require('../middleware/requireToken')  //middle ware

const userRouter = express.Router();

userRouter.use(requireToken);

userRouter.post('/login',userLoginRoute);
userRouter.post('/signup',upload.single('photo'),userSignupRoute);     //for multer
// userRouter.post('/signup',userSignupRoute);


module.exports = userRouter;