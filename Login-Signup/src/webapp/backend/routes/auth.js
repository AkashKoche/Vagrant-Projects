const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();
        res.json({ success: true, message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        res.json({ success: true, message: 'User logged in successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
