const mongoose = require("mongoose")
require('dotenv').config()

const mongoString = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@sandbox.vxmke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})

