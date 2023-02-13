const createError = require('http-errors');
const UsersService = require('../../services/users');
const usersService = new UsersService();

const logoutUser = async (req, res, next) => {

    try {
        const {id} = req.user;
        await usersService.setToken(id,null)
      return res.status(204).json({});

    } catch (err) {
      
        next(err)
    }

}

module.exports=logoutUser;