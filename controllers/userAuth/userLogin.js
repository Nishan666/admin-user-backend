require('dotenv').config()
const userModel = require('../../models/userModel');
const {createJwtToken , verifyJwtToken } = require('../../jwt/jwtToken');
const bcrypt = require('bcrypt');

const userLoginRoute = async (req, res) => {
    const { phone, password } = req.body;
    console.log(req.body);

    const admin = req.admin;

    try {
        const user = await userModel.findOne({ phone });
        if (!user) {
            throw "User not found"
        } else if (!bcrypt.compareSync(password, user.password)) {
            throw "incorrect credentials"
        } else {
            res.status(200).json({ user, token: createJwtToken(phone) ,admin})
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = userLoginRoute;