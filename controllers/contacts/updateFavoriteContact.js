const Contact = require('../../models/contact')

const updateFavoriteContact = async (req, res, next) => {
    try {
      const {contactId} = req.params;
      const {id:userId} = req.user;
      const contact = await Contact.findOneAndUpdate({id:contactId, owner:userId},{...req.body},{new:true,runValidators:true});
      if(contact) {
        return res.status(201).json({  data:contact })
      }
      next()
  
    } catch (error) {
      console.log(error.message);
    }
  }

module.exports=updateFavoriteContact;