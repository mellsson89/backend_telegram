
const currentUser = async (req, res, next) => {

    try {
        const data = req.user;
        return res.status(200).json({user:data});

    } catch (err) {

        next(err)
    }

}

module.exports=currentUser;