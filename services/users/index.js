const {User} = require('../../models');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");

class UsersService {

    async isUserExist(email) {
        const user = await User.findOne({email});
        return !!user
    }

    async create(body){
        const newUser = new User(body)
        const data = await newUser.save();
        return data;
    }

    getToken(user) {
        const {id} = user;
        const payload = {id};
        const {JWT_SECRET_KEY} = process.env;
        const token = jwt.sign(payload, JWT_SECRET_KEY, {expiresIn:'5h'});
        return token;
    }

    verifyHash(authData){
        const dataCheckString = Object.keys(authData)
            .sort()
            .map(key => (`${key}=${authData[key]}`))
            .join('\n');
        const secretKey = crypto.createHash('sha256').update(process.env.BOT_TELEGRAM_TOKEN).digest();
        return  crypto.createHmac('sha256',secretKey).update(dataCheckString).digest('hex');

    }

    async setToken(userId,token) {

        return await User.findOneAndUpdate({id:userId},{token})
    }

    async updateUser(userId,body) {

        return await User.findOneAndUpdate({id:userId},{...body},{new:true,runValidators:true})
    }


}

module.exports = UsersService;