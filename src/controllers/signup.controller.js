const express = require("express");
const router = express.Router();
const signUp = require("../models/signup.model");
const User = require("../models/users")

router.get("", (req, res) => {
    res.render("signup.view.ejs",{message:"message"});
})

router.get("/login", (req, res) => {
    res.render("login.view.ejs",{ });
})



router.post("/", async (req, res) => {
    try{
        // console.log(req.body);
    const user = await User.create(req.body);
    console.log(user,"user created");
    return res.render("login.view.ejs",{user});
    }
    catch(err){
        return res.status(400).send(err);
    }

})

module.exports = router;