const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let lastPostedData = null; // Variable to store the last posted data

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the HTML page
app.use(express.static('public'));

// Handle POST request and store the data
app.post('/', (req, res) => {
    lastPostedData = req.body;
    res.send(`${JSON.stringify(lastPostedData, null, 2)}`);
});

// Handle GET request and send the last posted data
app.get('/', (req, res) => {
    res.send(`${JSON.stringify(lastPostedData, null, 2)}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
