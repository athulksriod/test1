const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the HTML page
app.use(express.static('public'));

// Handle POST request and display request body on the webpage
app.post('/', (req, res) => {
    const postData = req.body;
    res.send(`<pre>${JSON.stringify(postData, null, 2)}</pre>`);
});

// Start the HTTP server
app.listen(port, () => {
  console.log(`HTTP server listening at http://localhost:${port}`);
});
