const port = 3333;
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.uuzzu.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => {
    console.log("🚀 ~ file: server.js ~ line 10 ~ server.listen ~ port", port);
});