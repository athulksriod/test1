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
    console.log('Received POST request:', req.body);
    res.send(`${JSON.stringify(lastPostedData, null, 2)}`);
});

// Handle GET request for retrieving the last posted data
app.get('/lastPostedData', (req, res) => {
    console.log(lastPostedData);
    res.json({"test:",lastPostedData});
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
