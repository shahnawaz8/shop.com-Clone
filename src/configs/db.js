const mongoose = require("mongoose");
// require("dotenv").config();
const connect = () => {
  return mongoose.connect(
       "mongodb+srv://web14shop:web14@cluster0.bvdwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    // ||
          // `mongodb+srv://${process.env.DB_NAME2}:${process.env.DB_PASSWORD2}@cluster0.bvdwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    // ||
    //    `mongodb+srv://${process.env.DB_NAME3}:${process.env.DB_PASSWORD3}@cluster0.bvdwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  });
};

module.exports = connect;