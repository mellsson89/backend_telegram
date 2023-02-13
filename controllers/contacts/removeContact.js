const Contact = require('../../models/contact')
const removeContact = async (req, res, next) => {
    try {
      const {contactId} = req.params;
      const {id:userId} = req.user;
      const contact = await Contact.findOneAndRemove({id:contactId, owner:userId});
      if(contact) {
        return res.status(200).json({  message: "contact deleted"})
      }
      next();
    } catch (error) {
      next(error)
    }
  }

module.exports=removeContact;