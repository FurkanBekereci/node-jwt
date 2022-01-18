const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require("../errors");

module.exports = async(req,res,next) => {
    const { authorization } = req.headers;
    if(!authorization?.match('^Bearer .*')) throw new UnauthenticatedError("No token provided.")

    const token = authorization.split(' ')[1];

    try{
        req.user = jwt.verify(token,process.env.JWT_SECRET);
        next()
    }catch(error){
        throw new UnauthenticatedError('Not authorized to access this route.')
    }
}