const express = require("express");
const router = express.Router();
const login = require("../models/login.model");
const signUp = require("../models/signup.model");
const User = require("../models/users")

router.get("", (req, res) => {
    res.render("login.view.ejs",{ message:"message"});
})


router.post('/user', async (req, res) => {
    try{
        // console.log(req.body.email)
        // { $eq: [ <expression1>, <expression2> ] }
        const user = await User.find({$and: [{email:req.body.email} , {password:req.body.password} ]}).lean().exec();
        // return res.send(user)
        console.log(user);
        if(user.length>0){
            return res.render("homeAfterLogin.view.ejs",{message:"logged in",user:user[0]})
        }
        else{     
            return res.render("error.view.ejs",{ error:"wrong credentials"});
        }
    }
    catch(err){

        return res.render("login.view.ejs",{ error:"message"});
    }

})

module.exports = router;