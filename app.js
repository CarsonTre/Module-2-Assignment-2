// Import required modules
const express = require('express'); // Importing the Express framework
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const path = require('path'); // Module for handling file paths

// Create an instance of the Express application
const app = express(); // Initialize an Express application

// Configure middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: false })); 

// Configure the view engine to use EJS templates
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

// Define a route for handling GET requests at the root path ('/')
app.get('/', (req, res) => {
    // Render the 'index' view
    res.render('index'); 
});

// Define a route for handling POST requests at the root path ('/calculate')
app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body; // Extract 'num1' and 'num2' from the POST request body
    const sum = Number(num1) + Number(num2); // Calculate the sum
    const difference = Number(num1) - Number(num2); // Calculate the difference
    const product = Number(num1) * Number(num2); // Calculate the product
    const quotient = Number(num1) / Number(num2); // Calculate the quotient

    // Render the 'result' view and pass the calculated values to it
    res.render("result", { sum, difference, product, quotient });
});

var port = 4000; // Define the port number for the server

// Start the server, listening on the port defined
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});
