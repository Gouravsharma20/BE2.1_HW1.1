const mongoose = require("mongoose")

require("dotenv").config()

const restrauntModel = require("./schema/restrauntSchema")

const profileurl = require("./database/db.connect")


const fs = require("fs")

const jsonData = fs.readFileSync("./data/restrauntData.json","utf-8")

const restroData = JSON.parse(jsonData)

async function seedData() {
    try {
        for (const restraunt of restroData) {
            const newRestro = new restrauntModel({
                name:restraunt.name,
                cuisine:restraunt.cuisine,
                location:restraunt.location,
                rating:restraunt.rating,
                reviews:restraunt.reviews,
                website:restraunt.website,
                phoneNumber:restraunt.phoneNumber,
                openHours:restraunt.openHours,
                priceRange:restraunt.priceRange,
                reservationsNeeded:restraunt.reservationsNeeded,
                isDeliveryAvailable:restraunt.isDeliveryAvailable,
                menuUrl:restraunt.menuUrl,
                photos:restraunt.photos
            }
        )
        await newRestro.save()
        }
        console.log("book data stored successfully")

    }
    catch (err) {
        console.log("error storing data in database",err)
    }
}

const newRestaurant = {
  name: "Cha Cha",
  cuisine: "Spanish",
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};

async function addrestro(restro){
    await profileurl()
    try{
        const newrestro = new restrauntModel(restro)
        const saveMovie = await newrestro.save()
        console.log("new movie data saved successfully",saveMovie)
    } catch (err) {
        throw err
    }
}



profileurl()


seedData()

addrestro(newRestaurant)


