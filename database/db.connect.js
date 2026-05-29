require("dotenv").config()

const mongoose = require("mongoose")

const mongoDbUrl = process.env.MONGODB_URI




const profileurl = async () => {await mongoose.connect(mongoDbUrl).then(()=>console.log("database connected successfully")).catch((error)=>{console.log("Error loading data",error)})}

module.exports = profileurl