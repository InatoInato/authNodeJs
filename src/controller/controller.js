const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const router = express.Router();

const jwtSecret = 'Secret123';

router.post("/register", async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(400).send("Username and password are required")
    }

    try{
        const user = new User({ username, password});
        await user.save();
        res.status(201).send("Register is success!");
    }
    catch(e){
        res.status(400).send(e);
    }
})

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username});
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).send("Incorrect username or password!");
        }
        const token = jwt.sign({userId: user._id}, jwtSecret, {expiresIn: "1h"});
        res.send({token});
    }
    catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;