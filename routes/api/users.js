const express = require('express');
const router = express.Router();
const { loginUser, logoutUser} = require('../../controllers');

const guard = require('../../middlewares/guard')


router.post('/login', loginUser);

router.get('/logout', guard, logoutUser);


module.exports = router
