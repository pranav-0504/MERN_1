//! Calling .dotenv file in the Server so that it can Run!
require("dotenv").config();     

const express = require("express");
const app = express();                  // MAIN EXPRESS KI LIBRARY

const cors = require("cors");           

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");

const connectDb = require("./utils/db");
const errorMiddleWare = require("./middlewares/error-middleware");

//! Tackling Cors for FRONTEND REACR + BACKEND CONNECTION 
const corsOptions = {
    origin: "http://localhost:5173",           //? Frontend React part is Origin here!
    method: "POST, GET, DELETE, PUT, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));
// app.use(cors);


//! By this line means we can use json in express Js: JSON MiddleWear in Express JS
app.use(express.json());

//* iss line ka mtlb hai ham router use kar rhe hai app.use():
app.use("/api/auth", authRoute); 
app.use("/api/form", contactRoute);      //! FOR contact Form

app.use(errorMiddleWare);           //! Error Middleware MOST IMPORTANT THING

const PORT = 5000; 
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running At Port: ${PORT}`);
    });    
});


