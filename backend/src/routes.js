const express = require('express');
const DevController = require('./controllers/Devcontroller');
const LikeController = require('./controllers/Likecontroller');

const routes = express.Router();

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);

module.exports = routes; 