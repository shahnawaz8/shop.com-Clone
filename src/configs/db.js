const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    // "mongodb+srv://shahnawaz8:web14database@cluster0.bvdwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    // ||
    "mongodb+srv://web14shop:web14@cluster0.bvdwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    // ||
    // "mongodb+srv://shopDotComWithWeb14:web14@cluster0.bvdwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  });
};

module.exports = connect;