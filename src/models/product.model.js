
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        id:         {type:Number,required:false},
        title:      {type:String,required:true},
        price:      {type:Number,required:true},
        color:      [{type:String,required:false}],
        description:{type:String,required:false},
        date: {type:Date,required:false},
        types: {
          category: {type:String,required:false},
          subCategory: {type:String,required:false}
        },
        imageUrl: {type:String,required:false},
        rating: {
          rate: {type:String,required:false},
          count: {type:String,required:false}
        }



}, {
  versionKey:false,
  timestamps: true
});

module.exports = mongoose.model("products", productSchema)