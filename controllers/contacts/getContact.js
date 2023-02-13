const Contact = require('../../models/contact');
const createError = require('http-errors');

const getContact = async (req, res, next) => {
    try {
      const {contactId} = req.params;
      const {id} = req.user
      const contact = await Contact.findOne({owner:id, id:contactId}).populate('owner','id email subscription');
      if(contact) {
        return res.status(200).json({  data:contact })
      }
      next()
  
    } catch (error) {
        next(error)
    }
  }

module.exports=getContact;