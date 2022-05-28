const {Router} = require('express');
const User = require('../models/User');
const router = Router();

router.get('/', async (req,res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch(e) {
        return res.status(500).json({message: 'Internal Server Error'});
    }    
})



module.exports = router;