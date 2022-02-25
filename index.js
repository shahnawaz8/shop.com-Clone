const express = require("express");
var cors = require('cors')
require("dotenv").config();
const path = require("path");
const app = express();
app.use(cors())
const port = process.env.PORT || 2345;
const connect = require("./src/configs/db");
app.use(express.json());
const session = require("express-session");
// html pages link
app.set("views", path.join(__dirname, "./src/views"));
// style sheets
app.use("/static", express.static(path.join(__dirname, "src/styleSheets")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

// app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs");

//session
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 4000 },
    resave: false,
    saveUninitialized: false,
  })
);

// images folder
app.use(express.static("./src/public"));
// login
const loginController = require("./src/controllers/login.controller");
app.use("/login", loginController);


// product
const productController = require("./src/controllers/product.controller")
app.use("/api/products", productController);

// signup
const signupController = require("./src/controllers/signup.controller");
app.use("/signup", signupController);

const homepageController = require("./src/controllers/homepage.controller")
app.use("",homepageController)
app.listen(port, async function (req, res) {
  await connect();
  console.log(`succesfully connected with database ${process.env.DB_NAME}`)
  console.log(`listening at port ${port}`);
});