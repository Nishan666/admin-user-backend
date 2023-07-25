const express = require('express');
const mongoose = require('mongoose');
const adminRouter = require('./routes/adminRouter');
const userRouter = require('./routes/userRoute');
const bodyParser = require('body-parser');

const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true ,limit : "50mb"}));

app.use('/admin',adminRouter);
app.use('/user',userRouter);

mongoose.connect('mongodb://127.0.0.1:27017/admin-user')
.then(()=>console.log("sucessfully connected to DB"))
.catch((err)=>console.log(err));

app.listen(PORT,()=>console.log(`Listening to port ${PORT}`));