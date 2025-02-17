import mongoose from "mongoose";

const cart = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    count:{
        type:Number,
        required:true
    },
    price:{
        type:String,
        required:true
    },
});
 const cartmodel = new mongoose.model("cart",cart);
 export default cartmodel;