const adminModel = require('../../models/adminModel');
const {createJwtToken } = require('../../jwt/jwtToken');
const bcrypt = require('bcrypt');
var validator = require('validator');

const adminSignupRoute = async(req,res)=>{
    const { email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    try {
        const admin = await adminModel.findOne({ email });
        if (admin) {
            throw "Admin Already exist"
        } else if (!validator.isEmail(email)) {
            throw "Invalid email"
        } else if (!validator.isStrongPassword(password)) {
            throw "weak password"
        } else {
            const admin = await adminModel.create({ email, password: hash });
            res.status(200).json({ admin, token: createJwtToken(email) })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = adminSignupRoute;