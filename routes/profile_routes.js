const User = require('../models/User');
const { Types } = require('mongoose');
const Post = require('../models/Post');
const Profile = require('../models/Profile');
const {Router} = require('express');
const router = Router();

router.get('/:id', async (req,res)=>{
    try {
        let profile = await User.findById(req.params.id).select(['-password']).populate({path:'profile', populate: {path: 'posts'}}).exec();
        return res.json(profile);
    } catch(e) {
        return res.status(500).json({message: 'Internal Server Error'});
    }
});

module.exports = router;