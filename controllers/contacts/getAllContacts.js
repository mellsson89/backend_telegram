const Contact = require('../../models/contact')

const getAllContacts = async (req, res, next) => {

    try {
      const {favorite} = req.query;
      const {id} = req.user;
      const {page=1, limit=10} = req.query;
      const skip = (page - 1) * limit;

      if(favorite === 'undefined') {
        const contacts = await Contact.find({owner:id} ,"", {skip, limit : Number(limit)}).populate('owner','id email subscription');
        return res.status(200).json({  data:contacts });
      }
      const contacts = await Contact.find({owner:id, favorite } ,"", {skip, limit : Number(limit)}).populate('owner','id email subscription');
       res.status(200).json({  data:contacts });


    } catch (error) {
      console.log(error.message);
    }
  
  }

module.exports=getAllContacts;