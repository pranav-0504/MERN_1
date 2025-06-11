const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({                // ISI KO User NAAM SE EXPORT KIA HAI
    username: {
        type: String,
        required: true,              // means khali nhi chodh skte yeh postn!
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        // unique: true,
    },
    password: {
        type: String,
        required: true,          
    },

    //! Admin hai ya nhi:
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

//! Hashing the Password here only: MOST IMPROTANT ***********
userSchema.pre("save", async function(next){
    
    console.log("pre method", this );

    const user = this;

    //* idhr agya naya password create hua hai: then:

    try{
        const saltRound = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(user.password, saltRound);
        user.password = hashed_password;            //! Hashing krdi hai! yahi pe he!
        next();
    }
    catch(error){
        next(error);
    }
});

//* JSON WEB TOKENS JWT 

userSchema.methods.generateToken = async function() {

    try{
        return jwt.sign(
            
            //! payLoad:
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },

            //! Signature:
            process.env.JWT_SECRET_KEY,

            {
                expiresIn: "30d",           //? Expire in 30 Days!
            }
        );
    }
    catch(error){
        console.log("ERROR IS: ", error); 
    }
};

//* TO COMPARE THE PASSWORDS! Function Bana dia hai! Easy fot hamesha ke lie!
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

//! Defining the Collection Name:
const User = new mongoose.model("User", userSchema);
module.exports = User;





