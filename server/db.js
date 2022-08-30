const mongoose = require('mongoose');
const mongoUri = "mongodb://localhost:27017/Aug30SocialApp?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = ()=>{

    mongoose.connect(mongoUri,()=>{
        console.log("Connected to mongo successfully")
    })
}

module.exports = connectToMongo;