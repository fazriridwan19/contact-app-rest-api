const { addNewContact, getContactById, getContacts, setContact, deleteContact } = require('../controllers/contactController');
const router = require('express').Router();

router.post('/', addNewContact)
    .get('/', getContacts)
    .get('/:id', getContactById)
    .patch('/', setContact)
    .delete('/:id', deleteContact);

module.exports = router;