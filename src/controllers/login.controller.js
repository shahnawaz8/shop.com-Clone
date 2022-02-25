const express = require("express");
const router = express.Router();
const login = require("../models/login.model");
const signUp = require("../models/signup.model");
const User = require("../models/users")

var date = new Date().toLocaleTimeString();

router.get("", (req, res) => {
    console.log("GET request at "+date +" at:/login/")
    res.render("login.view.ejs",{ message:"message"});
})


router.post('/', async (req, res) => {
    try{
        // console.log(req.body.email)
        // { $eq: [ <expression1>, <expression2> ] }
        const user = await User.find({$and: [{email:req.body.email} , {password:req.body.password} ]}).lean().exec();
        // return res.send(user)
        console.log("POST request at "+date +" at:/login/user")
        if(user.length>0){
            res.render("homeAfterLogin.ejs",{message:"logged in",user:user[0]})
        }
        else{     
            res.render("login.view.copy.ejs",{ error:"wrong credentials"});
        }
    }
    catch(err){

        return res.render("login.view.ejs",{ error:"message"});
    }

})

module.exports = router;