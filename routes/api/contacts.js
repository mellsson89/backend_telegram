const express = require('express');
const router = express.Router();
const {getAllContacts, getContact,addContact, removeContact, updateContact, updateFavoriteContact} = require('../../controllers')
// const {validateAdd, validateUpdate, validateFavoriteUpdate} = require('../../middlewares/validation');
const guard = require('../../middlewares/guard')
// const validations = require('../../middlewares/validations');
// const {updateSchema} = require('../../middlewares/validation')

// router.get('/', guard, getAllContacts);
//
// router.get('/:contactId', guard, getContact);
//
// router.post('/', guard, validateAdd, addContact);
//
// router.delete('/:contactId', guard,removeContact);
// router.patch('/:contactId/favorite', guard, validateFavoriteUpdate, updateFavoriteContact);
//
//
// router.put('/:contactId', guard, validations(updateSchema), updateContact);


module.exports = router
