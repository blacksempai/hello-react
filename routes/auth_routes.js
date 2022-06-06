const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Profile = require('../models/Profile');
const config = require('config');
const router = Router();

router.post(
    '/register',
    [
        check('email', 'Email is incorrect').isEmail(),
        check('password', 'Password should be longer than 6 symbols').isLength({ min: 6 }),
        check('sex', 'Choose gender').exists(),
        check('name', 'Enter your name').exists()
    ],
    async (req,res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data'
                })
            }

            const { email, password, sex, name } = req.body;
            const candidate = await User.findOne({ email });
            
            if(candidate) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hasedPassword = await bcrypt.hash(password, 12);
            const profile = new Profile({posts:[]});
            const user = new User({ email, password: hasedPassword, sex, name, profile: profile._id });
            
            await profile.save();
            await user.save();

            return res.status(201).json({ message: 'User created' });

        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
);

router.post(
    '/login',
    [
        check('email', 'Enter correct email').isEmail(),
        check('password', 'Enter password').exists()
    ],
    async (req,res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data'
                })
            }
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            
            if(!user) {
                return res.status(400).json({ message: 'User is not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Bad credentials' })
            }

            const token = jwt.sign(
                { userId: user._id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            );
            
            return res.json({ token, userId: user._id })

        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
);

module.exports = router;