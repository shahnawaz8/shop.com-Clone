const express = require("express");
const users = require("../models/users");
const router = express.Router();
const User = require("../models/users")

// get homepage
router.get("", async function (req, res) {
  try {
   const user =await User.find().lean().exec();
  //  console.log(user)
    return res.status(201).json(user)
    //return res.render("homepage.view.ejs",{user});
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
router.post("",async function (req,res){
  try {
    const user =await User.create(req.body);
    return res.status(201).send(user)
    } catch (error) {
      console.log(error)
    }
})




module.exports = router;