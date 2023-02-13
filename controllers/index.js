const addContact = require('./contacts/addContact');
const getAllContacts = require('./contacts/getAllContacts');
const getContact = require('./contacts/getContact');
const removeContact = require('./contacts/removeContact');
const updateContact = require('./contacts/updateContact');
const updateFavoriteContact = require('./contacts/updateFavoriteContact');
const loginUser = require('./users/loginUser');
const logoutUser = require('./users/logoutUser');


module.exports={addContact, getAllContacts, 
    getContact,removeContact, updateContact, 
    updateFavoriteContact, loginUser, logoutUser}