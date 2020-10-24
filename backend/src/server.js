const port = 8080;
const express = require('express');
const routes = require('./routes');

const server = express();

server.use(routes);

server.listen(port, () => {
    console.log(`server start on port ${port}`);
});