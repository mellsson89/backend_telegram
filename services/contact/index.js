const {Contact} = require('../../models');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");

class ContactService {

    async isContactExist(id) {
        const data = await Contact.findOne({owner:id});
        return !!data
    }


    async updateContact(userId,body) {

        const user = await Contact.findOneAndUpdate({owner:userId},{...body},{new:true,runValidators:true});
        return user;
    }

    async findContact (id) {
        const data = await Contact.findOne({owner:id});
        return data
    }


}

module.exports = ContactService;