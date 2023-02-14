const express = require('express');
const router = express.Router();
const { loginUser, logoutUser, currentUser} = require('../../controllers');
const guard = require('../../middlewares/guard')


router.post('/login', loginUser);
router.get('/logout', guard, logoutUser);
router.get('/current', guard, currentUser);


module.exports = router
