const User = require('../models/User');
const Profile = require('../models/Profile');
const Post = require('../models/Post');
const {Router} = require('express');
const router = Router();

router.get('/:id', async (req,res)=>{
    try {
        let user = await User.findById(req.params.id).select(['-password']).lean().exec();
        let profile = await Profile.findById(user.profile).populate('posts').lean().exec();
        return res.json({
            ...user,
            ...profile
        });
    } catch(e) {
        console.error(e)
        return res.status(500).json({message: 'Internal Server Error'});
    }
});

module.exports = router;