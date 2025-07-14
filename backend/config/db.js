import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect(
      "mongodb+srv://shivamsinghdhakar:ktd1UvI1WObXQShR@cluster0.o6wokgq.mongodb.net/toma-togo"
    ).then(()=>console.log("db connected"))
}