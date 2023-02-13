const createError = require('http-errors');
var jwt = require('jsonwebtoken');
const {User} = require('../models');

const verifyToken =(token) => {

try {
    const {JWT_SECRET_KEY} = process.env;
    const verify = jwt.verify(token, JWT_SECRET_KEY);
    return !!verify

} catch (error) {
   return false;
}

}


const guard = async (req,res,next) => {

const {authorization=""} = req.headers;
const [bearer, token]= authorization.split(' ');
const verife = verifyToken(token);

if(bearer !== "Bearer" || !verife ) {
next(new createError(401, 'Not authorized')) 

}

const {id:userId} = jwt.decode(token);
const user = await User.findOne({id:userId})

if(!user || user.token !==token) {
    next(new createError(401, 'Not authorized')) 
}

req.user=user;

next();
}


module.exports=guard;