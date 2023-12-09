//@description Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = (req, res) => {
    res.status(200).json({"name":"get all request"});
};

//@description Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({"name": `get contact for id: ${req.params.id}`});
};

//@description Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({"name":"Create contact"});
};

//@description Edit complete contact
//@route PUT /api/contacts/:id
//@access public
const putContact = (req, res) => {
    res.status(200).json({"name": `Edit complete contact for id: ${req.params.id}`});
}

//@description Edit contact partially
//@route PATCH /api/contacts/:id
//@access public
const patchContact = (req, res) => {
    res.status(200).json({"name":`Edit partial contact for id: ${req.params.id}`});
}

//@description Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({"name":`Delete contact for id: ${req.params.id}`});
}

module.exports = { getAllContacts, getContact, createContact, putContact, patchContact, deleteContact };