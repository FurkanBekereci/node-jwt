const CustomAPIError = require("../errors/custom-error");
const jwt = require('jsonwebtoken');

//Validation option
//1 - Mongoose
//2 - Joi
//3 - if controling in controller

const login = async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        throw new CustomAPIError("Please provide username and password!!",404);
    }
    const id = new Date().getDate();
    const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'User created:',token})
}

const dashboard = async (req,res) => {
    const {id, username} = req.user;
    console.log(username , "is coming to annaaaa!!");
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({msg : `Hello, ${username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
   
}

module.exports = {
    login, dashboard
}