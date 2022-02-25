const express = require("express");
const router = express.Router();
const signUp = require("../models/signup.model");
const User = require("../models/users")

var date = new Date().toLocaleTimeString();


router.get("", (req, res) => {
    console.log("GET request at "+date +" at:/signup")
    res.render("signup.view.ejs",{message:"message"});
})

router.get("/login", (req, res) => {
    console.log("GET request at "+date +" at:signup/login/")
    res.render("login.view.ejs",{ });
})



router.post("/", async (req, res) => {
    try{
        // console.log(req.body);
    const user = await User.create(req.body);
    console.log("POST request at "+date +" at:/singup")
    // console.log(user,"user created");
    return res.render("login.view.ejs",{user});
    }
    catch(err){
        return res.status(400).send(err);
    }

})

module.exports = router;