const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message, howDidYouHear } = req.body;

    // Log the form data or save it to a database
    console.log('Form submission received:', { name, email, message, howDidYouHear });

    // Send a response back to the frontend
    res.json({ status: 'success', message: 'Message received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
