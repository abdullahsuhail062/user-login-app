const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

// Create an instance of the Express application
const app = express();

// Apply security headers (Helmet)
app.use(helmet());
app.options('*', cors()); // Enable pre-flight across the board

// Use CORS middleware to allow cross-origin requests
app.use(cors({
  origin: 'http://localhost:4200', // Allow requests from your Angular frontend
  credentials: true, // Allows credentials such as cookies to be included in the requests
}));

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// POST endpoint to handle user registration
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || username.length < 3 || /\s/.test(username)) {
    return res.status(400).json({ error: 'Username must be at least 3 characters long and contain no spaces' });
  }

  if (!email || !/^[a-zA-Z0-9._%+-]+@example\.(com|org|net)$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  // All fields valid
  return res.status(201).json({ message: 'User registered successfully' })
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
