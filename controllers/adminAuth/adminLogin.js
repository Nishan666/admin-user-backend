const adminModel = require('../../models/adminModel');
const {createJwtToken } = require('../../jwt/jwtToken');
const bcrypt = require('bcrypt');

const adminLoginRoute = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await adminModel.findOne({ email });
        if (!admin) {
            throw "Admin not found"
        } else if(!bcrypt.compareSync(password, admin.password)){
            throw "incorrect credentials"
        }else{
            res.status(200).json({ admin, token: createJwtToken(email) })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = adminLoginRoute;