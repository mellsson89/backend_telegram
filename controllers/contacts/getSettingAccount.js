const ContactService = require('../../services/contact');
const contactService = new ContactService();

const getSetting = async (req, res, next) => {
    try {
        const {id} = req.user;
        const user = await contactService.findContact(id);

        if(user) {
            res.status(200).json({data: user});
        }

        res.status(204).json({});


    } catch (error) {
        next(error)
    }
}

module.exports=getSetting;