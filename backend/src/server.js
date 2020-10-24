const port = 8080;
const express = require('express');

const server = express();

server.get('/', (req, res) => {
    return res.json('Hello World');
});

server.listen(port);