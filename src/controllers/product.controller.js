const express = require("express");
// const users = require("../models/users");
const router = express.Router();
const Product = require("../models/product.model")
const path = require("path")

var date = new Date().toLocaleTimeString();


// get homepage
router.get("",async function (req, res) {
  try {
   const products =await Product.find().lean().exec();
  //  console.log(product)
    console.log("GET request at "+date +" at home route")
    // return res.sendFile(check.html,"../views",)
    // return res.render("homepage.view.ejs",{product});
    // return res.send(product);
    var options = {
      root: path.join(__dirname,"../views")
    };
    var fileName = 'product.html';
    // res.sendFile(fileName, options);
    res.json(products)
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/products",async function (req, res) {
  try {
   const products =await Product.find().lean().exec();
  //  console.log(product)
    console.log("GET request at "+date +" at home route")
    // return res.sendFile(check.html,"../views",)
    // return res.render("homepage.view.ejs",{product});
    // return res.send(product);
    var options = {
      root: path.join(__dirname,"../frontend/")
    };
    var fileName = 'product.html';
    res.sendFile(fileName, options);
    // res.json(products)
  } catch (err) {
    return res.status(400).send(err.message);
  }
});



router.get("/productDetails.html",async function (req, res) {
  try {
   const products =await Product.find().lean().exec();
  //  console.log(product)
    console.log("GET request at "+date +" at home route")
    // return res.sendFile(check.html,"../views",)
    // return res.render("homepage.view.ejs",{product});
    // return res.send(product);
    var options = {
      root: path.join(__dirname,"../frontend/")
    };
    var fileName = 'productDetails.html';
    res.sendFile(fileName, options);
    // res.json(products)
  } catch (err) {
    return res.status(400).send(err.message);
  }
});


router.get("/cart.html",async function (req, res) {
  try {
   const products =await Product.find().lean().exec();
  //  console.log(product)
    console.log("GET request at "+date +" at home route")
    // return res.sendFile(check.html,"../views",)
    // return res.render("homepage.view.ejs",{product});
    // return res.send(product);
    var options = {
      root: path.join(__dirname,"../frontend/")
    };
    var fileName = 'cart.html';
    res.sendFile(fileName, options);
    // res.json(products)
  } catch (err) {
    return res.status(400).send(err.message);
  }
});


router.get("/payment1.html",async function (req, res) {
  try {
   const products =await Product.find().lean().exec();
  //  console.log(product)
    console.log("GET request at "+date +" at home route")
    // return res.sendFile(check.html,"../views",)
    // return res.render("homepage.view.ejs",{product});
    // return res.send(product);
    var options = {
      root: path.join(__dirname,"../frontend/")
    };
    var fileName = 'payment1.html';
    res.sendFile(fileName, options);
    // res.json(products)
  } catch (err) {
    return res.status(400).send(err.message);
  }
});


router.get("/otp.html",async function (req, res) {
  try {
   const products =await Product.find().lean().exec();
  //  console.log(product)
    console.log("GET request at "+date +" at home route")
    // return res.sendFile(check.html,"../views",)
    // return res.render("homepage.view.ejs",{product});
    // return res.send(product);
    var options = {
      root: path.join(__dirname,"../frontend/")
    };
    var fileName = 'otp.html';
    res.sendFile(fileName, options);
    // res.json(products)
  } catch (err) {
    return res.status(400).send(err.message);
  }
});


router.get("/thankyou.html",async function (req, res) {
  try {
   const products =await Product.find().lean().exec();
  //  console.log(product)
    console.log("GET request at "+date +" at home route")
    // return res.sendFile(check.html,"../views",)
    // return res.render("homepage.view.ejs",{product});
    // return res.send(product);
    var options = {
      root: path.join(__dirname,"../frontend/")
    };
    var fileName = 'thankyou.html';
    res.sendFile(fileName, options);
    // res.json(products)
  } catch (err) {
    return res.status(400).send(err.message);
  }
});


router.post("",async function (req,res){
  try {
    const product =await Product.create(req.body);
    console.log("GET request at "+date +" at home route")
    return res.status(201).send(product)
    } catch (error) {
      console.log(error)
    }
})




module.exports = router;