const createError = require('http-errors');
const UsersService = require('../../services/users');
const usersService = new UsersService();
const loginUser = async (req, res, next) => {

    try {
        const authData = req.body;
        const checkHash = authData.hash;
        delete authData['hash'];

        const hash = usersService.verifyHash(authData)

        if(hash.localeCompare(checkHash) !== 0) {

            throw new createError(401, 'Data is NOT from Telegram');
        }

        // if(new Date() - Number(authData['auth_date'] )> 86400) {
        //     throw new createError(401, 'Data is outdated');
        // }

        const user = await usersService.isUserExist(authData.id);

        if(!user) {
            await usersService.create(authData);
        }

        await usersService.updateUser(authData.id,authData);

        const token = usersService.getToken(authData);
        await usersService.setToken(authData.id, token);


        return res.status(200).json({data:authData, token});

    } catch (err) {
      
        next(err)
    }

}

module.exports=loginUser;