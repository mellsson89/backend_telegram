const express = require('express');
const router = express.Router();
const {addSettingAccount,getSetting} = require('../../controllers')
const guard = require('../../middlewares/guard')

router.post('/', guard, addSettingAccount);
router.get('/', guard, getSetting);

module.exports = router
