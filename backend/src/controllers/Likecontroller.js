const Dev = require('../models/Dev');

module.exports = {
    async store(req,res){
        const { user } = req.headers;
        const { devId } = req.params;
        console.log("🚀 ~ file: LikeController.js ~ line 6 ~ store ~ user", user);
        console.log("🚀 ~ file: LikeController.js ~ line 7 ~ store ~ devId", devId);

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({ error: 'Dev not' });
        }

        if(targetDev.likes.includes(loggedDev._id)){
            console.log("🚀 ~ MATCH");
        }

        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();
        res.json(loggedDev);
    }
}