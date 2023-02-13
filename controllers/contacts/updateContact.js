const Contact = require('../../models/contact');
const createError = require('http-errors');

const updateContact = async (req, res, next) => {
    try {
      const {contactId} = req.params;
      const {id:userId} = req.user;
      const contact = await Contact.findOneAndUpdate({id:contactId, owner:userId},{...req.body},{new:true,runValidators:true});
      if(contact) {
        return res.status(201).json({  data:contact })
      }
     throw new createError(404, 'Not FOUND')

  
    } catch (err) {
      next(err)
    }
  }

module.exports=updateContact;