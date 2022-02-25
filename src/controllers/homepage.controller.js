const express = require("express");
const users = require("../models/users");
const router = express.Router();
const User = require("../models/users")
const path = require("path")

var date = new Date().toLocaleTimeString();


// get homepage
router.get("",async function (req, res) {
  try {
   const user =await User.find().lean().exec();
  //  console.log(user)
    console.log("GET request at "+date +" at home route")
    // return res.sendFile(check.html,"../views",)
    return res.render("homepage.view.ejs",{});
    // return res.send(user);


    // var options = {
    //   root: path.join(__dirname,"../views")
    // };

    // var fileName = 'product.html';
    // res.sendFile(fileName, options);




  } catch (err) {
    return res.status(400).send(err.message);
  }
});
router.post("",async function (req,res){
  try {
    const user =await User.create(req.body);
    console.log("GET request at "+date +" at home route")
    return res.status(201).send(user)
    } catch (error) {
      console.log(error)
    }
})




module.exports = router;