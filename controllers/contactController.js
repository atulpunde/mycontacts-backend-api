const errorHandler = require("../middleware/errorHandler");

//@description Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = errorHandler(async (req, res) => {
    res.status(200).json({"name":"get all request"});
});

//@description Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = errorHandler(async (req, res) => {
    res.status(200).json({"name": `get contact for id: ${req.params.id}`});
});

//@description Create new contact
//@route POST /api/contacts
//@access public
const createContact = errorHandler(async (req, res) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All field are mandatory.");
    }
    res.status(201).json(req.body);
});

//@description Edit complete contact
//@route PUT /api/contacts/:id
//@access public
const putContact = errorHandler(async (req, res) => {
    res.status(200).json({"name": `Edit complete contact for id: ${req.params.id}`});
})

//@description Edit contact partially
//@route PATCH /api/contacts/:id
//@access public
const patchContact = errorHandler(async (req, res) => {
    res.status(200).json({"name":`Edit partial contact for id: ${req.params.id}`});
})

//@description Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = errorHandler(async (req, res) => {
    res.status(200).json({"name":`Delete contact for id: ${req.params.id}`});
})

module.exports = { getAllContacts, getContact, createContact, putContact, patchContact, deleteContact };