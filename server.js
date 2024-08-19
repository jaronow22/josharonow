const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle POST requests from the contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message, 'how-did-you-hear': howDidYouHear } = req.body;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}, Heard About Us: ${howDidYouHear}`);

  res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
