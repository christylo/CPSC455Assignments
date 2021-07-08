const mongoose = require("mongoose")

const mongoString = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.vxmke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})

