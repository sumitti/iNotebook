const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fetchUser = require('../middleware/fetchuser');
require('dotenv').config()


const JWT_SECRET = process.env.JWT_SECRET_KEY;

// user registration route

router.post('/register',
    [
        body('name', 'Name is required').isLength({ min: 3 }),
        body('email', 'Unique Email is required').isEmail(),
        body('password', 'Password must be atleast 6 char').isLength({ min: 6 })
    ], async (req, res) => {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success, errors: errors.array().map(err => err.msg) });
        }
        try {
            const salt = await bcrypt.genSalt(10);
            const securePass = await bcrypt.hash(req.body.password, salt);
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePass
            })
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({success, message: "User created successfully", authToken });
        } catch (error) {
            console.log("error", error.message);
            if (error.code === 11000) {
                return res.status(400).json({error: "Email already exists" });
            }
            res.status(500).json("Server error or invalid credentials");
        }
    }
);

// user login route

router.post('/login',
    [
        body('email', 'Unique Email is required').isEmail(),
        body('password', 'Password must be atleast 6 char').isLength({ min: 6 })
    ], async (req, res) => {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success, errors: errors.array().map(err => err.msg) });
        }
        try {
            const {email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "Inavalid Credentials" });
            }
            const passwordComapre = await bcrypt.compare(password, user.password);
            if (!passwordComapre) {
                return res.status(400).json({success, error: "Inavalid Credentials" });
            }
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({success,message: "User authenticated", authToken, name: user.name });
        } catch (error) {
            console.log(error.message)
            res.status(500).json("Server error or invalid credentials");
            }
    }
);

// getUser

router.post('/getUser',fetchUser,async(req,res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Server error or invalid credentials");
    }
    }
);

module.exports = router;