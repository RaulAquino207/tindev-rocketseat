const port = 8080;
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();
mongoose.connect('mongodb+srv://admin:admin@cluster0.ju14s.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(express.json())
server.use(routes);

server.listen(port, () => {
    console.log(`server start on port ${port}`);
});