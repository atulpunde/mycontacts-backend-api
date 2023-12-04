const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({"name":"get request"});
});

router.post('/', (req, res) => {
    res.status(201).json({"name":"post request"});
});

router.put('/', (req, res) => {
    res.status(200).json({"name":"put request"});
});

router.patch('/', (req, res) => {
    res.status(200).json({"name":"patch request"});
});

router.delete('/', (req, res) => {
    res.status(200).json({"name":"delete request"});
});

module.exports = router;