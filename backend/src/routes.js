const express = require('express');
const DevController = require('./controllers/Devcontroller');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: "Hello World :D"});
});

routes.post('/devs', DevController.store);

module.exports = routes; 