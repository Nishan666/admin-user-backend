const adminModel = require('../models/adminModel');
const  {verifyJwtToken} = require('../jwt/jwtToken')

const requireToken = async (req ,res ,next)=>{

    const { authorization } = req.headers;

    if(!authorization){
        return res.status(400).json({error : "Authorization token requires"})
    }

    try {
        const data = verifyJwtToken(authorization);
        
        const admin = await adminModel.findOne({email : data.data})

        req.admin = admin.email

        next()
    } catch (error) {
        console.log(error);
        res.status(400).json({error : 'Request is not Authorized'})
    }
}

module.exports = requireToken;