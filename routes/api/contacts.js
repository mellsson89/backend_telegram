const express = require('express');
const router = express.Router();
const {addSettingAccount} = require('../../controllers')
const guard = require('../../middlewares/guard')

router.post('/', guard, addSettingAccount);


module.exports = router
