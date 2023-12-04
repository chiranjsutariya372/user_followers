const mongoose=require("mongoose")

const connect=async()=>{
    await mongoose.connect("mongodb+srv://chiranjsutariya372:chiranj@cluster0.vzywpba.mongodb.net/?retryWrites=true&w=majority")
    console.log("conncet to the database");
}

module.exports=connect