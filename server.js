const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the HTML page
app.use(express.static('public'));

// Handle POST request and display request body on the webpage
app.post('/', (req, res) => {
    const postData = req.body;
    res.send(`${JSON.stringify(postData, null, 2)}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
