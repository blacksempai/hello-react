const {Router} = require('express');
const User = require('../models/User');
const router = Router();

router.get('/', async (req,res) => {
    try {
        let page = parseInt(req.query.page, 10) || 0;
        let limit = parseInt(req.query.limit, 10) || 3;
        
        const users = await User.find().skip(page*limit).limit(limit).select(['-password']);

        let total = await User.countDocuments();

        let result = {
            users, page, total
        }

        return res.json(result);
    } catch(e) {
        return res.status(500).json({message: 'Internal Server Error'});
    }    
})

module.exports = router;