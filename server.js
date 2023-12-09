// Importing Express framework into our Node.js application
const express = require('express');
require('dotenv').config()
const contactsRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// If you do "npm i dotenv" then you can set the "process.env.PORT", and use port from .env file
const port = process.env.PORT || 5000;

// When you need to accept data from client to a server
app.use(express.json());

app.use('/api/contacts', contactsRoutes);

// created middleware to handle errors
app.use(errorHandler);

// Actual server started listning here.
// Show the address and port in the command prompt or terminal
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});