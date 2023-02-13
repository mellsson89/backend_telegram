const Contact = require('../../models/contact')

const addContact = async (req, res, next) => {
    try {
      const {id} = req.user
      const newContact = await Contact.create({...req.body, owner: id})
      res.status(201).json({data: newContact});
    } catch (error) {
      next(error)
    }
  }

module.exports=addContact;