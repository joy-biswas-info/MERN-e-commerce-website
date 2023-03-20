const User = require('../models/User');
const router = require('express').Router();
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


// REGISTER 
router.post("/register",async(req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
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
        !user && res.status(401).json("Wrong Cradential1!");
        if(user){
            const hasedPassword =CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
            const OriginalPassword = hasedPassword.toString(CryptoJS.enc.Utf8);

        if(OriginalPassword === req.body.password){
            const accessToken =jwt.sign({
                id:user._id,
                isAdmin:user.isAdmin,
            },process.env.JWT_SEC,{expiresIn:"3d"}) ;
            const {password,...others}=user._doc;
            res.status(200).json({...others,accessToken});
        }else{
            res.status(401).json("Wrong Cradential2!");
        }
        }        
    }catch(err){
        res.status(500).json("Something wet Wrong !");
    }

})



module.exports = router;