require('dotenv').config();
const userModel = require('../../models/userModel');
const {createJwtToken , verifyJwtToken } = require('../../jwt/jwtToken');
const bcrypt = require('bcrypt');
var validator = require('validator');

const userSignupRoute = async (req, res) => {

        const { username, phone, password } = req.body;

    const admin = req.admin;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    try {
        const user = await userModel.findOne({ phone });
        if (user) {
            throw "User Already exist"
        } else if (!validator.isMobilePhone(phone, 'any')) {
            throw "Invalid Phone Number"
        } else if (!validator.isStrongPassword(password)) {
            throw "weak password"
        } else {
            const newUser = await userModel.create({ username, photo: req.file.path, phone, password: hash });
            res.status(200).json({ newUser, token: createJwtToken(newUser.phone) ,admin})
        }
    } catch (error) {
        res.status(400).json({ error})
    }
}

module.exports = userSignupRoute;