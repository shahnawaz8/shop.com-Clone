
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  checkbox:{type:String,required:false},
  mobile:{type:String,required:true},
  allowMessage:{type:String,required:false},
  captcha:{type:String,required:false}



}, {
  versionKey:false,
  timestamps: true
});

module.exports = mongoose.model("users", userSchema)