import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const foodModel = mongoose.models.foodModel || mongoose.model("foodModel",foodSchema) // prevents it from creating multiple models

export default foodModel;