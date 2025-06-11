const mongoose = require("mongoose");

// DataBase ka naam rkha h maine alg se mern_admin: iss link me:
//* Mongo DB COMPASS Connect LINK:
// // const URI = "mongodb+srv://pranavaggarwal2004:J6JpouKFEwE0RxzS@admin.5wrfdc5.mongodb.net/mern_admin";

//! Driver Connect LINK:
//* DataBase ka naam rkha h maine alg se mern_admin: iss link me:
// // const URI = "mongodb+srv://pranavaggarwal2004:J6JpouKFEwE0RxzS@admin.5wrfdc5.mongodb.net/mern_Admin?retryWrites=true&w=majority&appName=Admin";

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




