const {Contact} = require('../../models');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");

class ContactService {

    async isContactExist(id) {
        const user = await Contact.findOne({owner:id});
        return !!user
    }


    async updateContact(userId,body) {

        const user = await Contact.findOneAndUpdate({owner:userId},{...body},{new:true,runValidators:true});
        return user;
    }


}

module.exports = ContactService;