require('dotenv').config()

const jwt = require('jsonwebtoken');

const createJwtToken = (data)=>{
    const token = jwt.sign({
        data: data
      }, process.env.SECRETS, { expiresIn: '1h' });
      
      return token;
}

const verifyJwtToken = (token)=>{
    const pureToken = token.split(' ')[1];
    const data = jwt.verify(pureToken, process.env.SECRETS);
    return data
}

module.exports = {createJwtToken , verifyJwtToken};
