const User = require("../models/user-model");               // UserSchema Import Krlia hai!
const bcrypt = require("bcryptjs");

//! Root Page Home:
const home = async (req, res) => {
    try{
        res.status(200).send("Welcome To Home Page"); 
    }
    catch(error){
        console.log(error);
    }
};

/*
! const registerPage = async (req, res) => {
!     try{
!         console.log(req.body);
!         res.status(200).json({message: req.body});
!         res.status(200).send("Welcome to Registration Page");
!     }
!     catch(error){
!         console.log(error);
!         res.status(500).json("Internal Server Error");
!     }
! };
*/

const registerPage = async (req, res, next) => {
    try{
        // res.status(200).send("Welcome to Registration Page");     // Not to be used in the Caseof POST
        console.log("request data for Registration from user: ");
        console.log(req.body);

        //! Destructring the things we will get back from the Registration Page:
        const {username, email, phone, password} = req.body;
        
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg: "Email Aready Exists"});
        }
        
        const phoneNumberExist = await User.findOne({phone});
        if(phoneNumberExist){
            return res.status(400).json({msg: "phone Number ALready Exists"});
        }

        //* Now Hashing the password for Security!  //? Sidha PRE METHOD IN MODEL ME HE KRDIA H YAHA SE HATA KE!
        //! const saltRound = 10;       // Makes password very complexxx!
        //! const hash_password = await bcrypt.hash(password, saltRound);

        //! Therefore Create krdia hai! MAIN LINE HAI YE!!!!
        const userCreated = await User.create({
            username,
            email,
            phone,
            password,   
        });

        console.log("✅ User created successfully:", userCreated);      // ADD THIS

        res.status(200).json({
            //* User: req.body, 
            //! User: userCreated,
            msg: "User Registered Sucessfully",                  //? Will BE SHOW ON POSTMAN OUTPUT TERMINAL
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });

        console.log(`Registration Sucessfull for the user: ${username}`);
    }

    catch(error) {
        console.error("Registration error:", error);            //* Real Error Show hoga! console pe
        //! res.status(400).json("Internal Server Error");
        next(error);            //! ab se yeh error-middleware sambhalega!
    }
};


//! LOGIN PAGE:
const login = async (req, res, next) => {

    try{
        const {email, password} = req.body;                 //! Destructure
        
        const userExist = await User.findOne({email});
        
        if(!userExist){
            // means agr nhi milta user db me:
            return res.status(400).json({message: "Invalid Email Entered"});             // NO USER FOUND INVALID EMAIL!
        }

        //* means Email thik h to Password check karenge ab: BY COMPARING PASSWORDS:
        
        //! const isPasswordValid = await bcrypt.compare(password, userExist.password);
        const isPasswordValid = await userExist.comparePassword(password);              // METHODS CREATED IN MODEL.js

        if(isPasswordValid){
            res.status(200).json({

                msg: "Login Succesfull Sucessfully",                  //? Will BE SHOW ON POSTMAN OUTPUT TERMINAL
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
        else{
            //* means Agr Password match nhi kia: WRONG PASSWORD
            return res.status(401).json({message: "INVALID PASSWORD ENTERED!"});
        }
    }
    catch(error){
        // res.status(500).json("INTERNAL SERVER ERROR IN LOGIN PAGE!");
        console.log("ERROR IS: ",error);
        next(error);
    }
};



//! Export Likhna very important
module.exports = { 
    home,
    registerPage,
    login
};
















