const Dev = require('../model/Dev');

module.exports = {
    async store(req, res){
        const { user } = req.headers;
        const { devId } = req.params;
        
        console.log(user);
        console.log(devId);
        
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            res.status(400).json({ error: 'Dev not exist' });
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();
        
        res.json(loggedDev);
    }
};