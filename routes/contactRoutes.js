const express = require('express');
const router = express.Router();
const { getAllContacts, getContact, createContact, putContact, patchContact, deleteContact } = require('../controllers/contactController');

router.get('/', getAllContacts);

router.get('/:id', getContact);

router.post('/', createContact);

router.put('/:id', putContact);

router.patch('/:id', patchContact);

router.delete('/:id', deleteContact);

module.exports = router;