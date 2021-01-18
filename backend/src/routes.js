const express = require('express');
const routes = express.Router();
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikesController = require('./controllers/DislikeController');

routes.get('/', (req,res) => {
    res.json({ message: 'API developed for the week omnistack. https://github.com/RaulAquino207/tindev-rocketseat' });
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikesController.store);

module.exports = routes;