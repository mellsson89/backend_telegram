const Contact = require('../../models/contact');
const ContactService = require('../../services/contact');
const contactService = new ContactService();

const addSettingAccount = async (req, res, next) => {
    try {
      const {id} = req.user;
      const user = await contactService.isContactExist(id);
      if(!user) {
          const newSetting = await Contact.create({...req.body, owner: id});
          res.status(201).json({data: newSetting});
      }
      const updateSetting = await contactService.updateContact(id,req.body);
        res.status(201).json({data: updateSetting});

    } catch (error) {
      next(error)
    }
  }

module.exports=addSettingAccount;