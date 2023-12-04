// Importing Express framework into our Node.js application
const express = require('express');
require('dotenv').config()
const contactsRoutes = require('./routes/contactRoutes');

const app = express();

// If you do "npm i dotenv" then you can set the "process.env.PORT", and use port from .env file
const port = process.env.PORT || 5000;

app.use('/api/contacts', contactsRoutes);

// Actual server started listning here.
// Show the address and port in the command prompt or terminal
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});