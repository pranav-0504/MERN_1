const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;            // From .env file

mongoose.connect(URI);

const connectDB =  async () => {

    try{
        await mongoose.connect(URI);
        console.log("MongoDb Connected Sucessfull ");
    }
    catch(error){
        console.error("DB CONNECTION FAILED X");
        process.exit(0);
    }
};

module.exports = connectDB;


