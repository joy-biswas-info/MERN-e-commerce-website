const User = require('../models/User');
const router = require('express').Router();
const CryptoJS = require("crypto-js");

// REGISTER 
router.post("/register",async(req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CriptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

// LOG IN 
router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username});
        !user && res.status(401).json("Wrong Credentials");
        const hasedPassword =CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
        const password = hasedPassword.toString(CryptoJS.enc.Utf8);
        password ==! req.body.password &&res.status(401).json("Wrong credentials!");
        

        res.status(200).json(user);
    }catch(err){
        res.status(500).json("Nothing Found");
    }
})



module.exports = router;