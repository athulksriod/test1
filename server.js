const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5000; // Port number for the HTTP server

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST requests to '/your-endpoint'
app.post('/your-endpoint', (req, res) => {
  console.log('Received POST request:', req.body);
  res.send('Received your POST request!');
});

// Start the HTTP server
app.listen(port, () => {
  console.log(`HTTP server listening at http://localhost:${port}`);
});
