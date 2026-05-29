const mongoose = require("mongoose")

const restrauntSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        enum:['American', 'Italian', 'Chinese', 'Indian', 'Japanese', 'Mexican', 'Thai', 'French', 'Mediterranean', 'Greek', 'Spanish', 'Other']
    },
    location:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5,
        default:0
    },
    reviews:[{
        type:String
    }],
    website:String,
    phoneNumber:{
        type:String,
        required:true
    },
    openHours:String,
    priceRange:{
        type:String,
        enum:["$ (0-10)","$$ (11-30)","$$$ (31-60)","$$$$ (61+)","others"]
    },
    reservationsNeeded:{
        type:Boolean,
        default:false
    },
    isDeliveryAvailable:{
        type:Boolean,
        default:false
    },
    menuUrl:{
        type:String,
        required:true
    },
    photos:{
        type: [String],
        default:[]
    },
},{ timestamps: true })

const restrauntModel = mongoose.model("restr-data",restrauntSchema)

module.exports = restrauntModel