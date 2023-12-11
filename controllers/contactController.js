const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");

//@description Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@description Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.statusCode(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@description Create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All field are mandatory.");
    }
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
});

//@description Edit complete contact
//@route PUT /api/contacts/:id
//@access public
const putContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.statusCode(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
    );
    res.status(200).json(updatedContact);
})

//@description Edit contact partially
//@route PATCH /api/contacts/:id
//@access public
const patchContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.statusCode(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: false},
    );
    res.status(200).json(updatedContact);
})

//@description Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.statusCode(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
})

module.exports = { getAllContacts, getContact, createContact, putContact, patchContact, deleteContact };