const axios = require('axios');
const Dev = require('../model/Dev')
module.exports = {
    async index(req, res) {
        const users = await Dev.find()
        return res.json({users});
    },

    async store(req, res) {
        const { username } = req.body;

        const userExist = await Dev.findOne({user: username});

        if(userExist){
            return res.json(userExist);
        }
        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data 

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });
        return res.json(dev);
    }
}