const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({"name":"get request"});
});

router.get('/:id', (req, res) => {
    res.status(200).json({"name":`get request for id: ${req.params.id}`});
});

router.post('/', (req, res) => {
    res.status(201).json({"name":"post request"});
});

router.put('/:id', (req, res) => {
    res.status(200).json({"name":`put request for id: ${req.params.id}`});
});

router.patch('/:id', (req, res) => {
    res.status(200).json({"name":`patch request for id: ${req.params.id}`});
});

router.delete('/:id', (req, res) => {
    res.status(200).json({"name":`delete request for id: ${req.params.id}`});
});

module.exports = router;