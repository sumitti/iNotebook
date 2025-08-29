const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const fetchUser = async(req,res,next) => {
// get the user from the jwt token and add id to the req object
    const token = req.header('auth-token');
    if(!token){
      return res.status(401).send({error:"Empty token"});
    }
    try {
        const data = jwt.verify(token , JWT_SECRET);
        req.user = data.user;
        next();        
    } catch (error) {
        console.log(error.message);
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
}

module.exports = fetchUser;