// Create web server
// Set up the Express server
const express = require('express');
const app = express();
const port = 3000;

// Set up the static file
app.use(express.static('public'));

// Set up the data
const comments = require('./data/comments');

// Set up the route
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
// End of comments.js

// Path: comments.js
// Create web server
// Set up the Express server
const express = require('express');
const app = express();
const port = 3000;

// Set up the static file
app.use(express.static('public'));

// Set up the data
const comments = require('./data/comments');

// Set up the route
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
// End of comments.js

// Path: comments.js
// Create web server
// Set up the Express server
const express = require('express');
const app = express();
const port = 3000;

// Set up the static file
app.use(express.static('public'));

// Set up the data
const comments = require('./data/comments');

// Set up the route
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
// End of comments.js

// Path: comments.js
// Create web server
// Set up the Express server
const express = require('express');
const app = express();
const port = 3000;

// Set up the static file
app.use(express.static('public'));

// Set up the data
const comments = require('./data/comments');

// Set up the route
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
// End of comments.js

// Path: comments.js
// Create web server
// Set up the Express server
const express = require