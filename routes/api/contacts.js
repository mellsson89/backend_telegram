const express = require('express');
const router = express.Router();
const {addSettingAccount, getSettingAccount} = require('../../controllers')
const guard = require('../../middlewares/guard')

router.post('/', guard, addSettingAccount);
router.get('/', guard, getSettingAccount);

module.exports = router
