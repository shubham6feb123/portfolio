const mongoose = require('mongoose')
const DB = 'mongodb+srv://shubhamsharma:bahubali@1@cluster0.3d3ue.mongodb.net/portfolio?retryWrites=true&w=majority'

const connectToMongodb = ()=>{
    mongoose.connect(process.env.URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(res=>console.log("Connected to MongoDb")).catch(err=>console.log("failed to connect with mongodb"))

}

module.exports = connectToMongodb;