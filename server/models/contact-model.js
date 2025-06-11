//!  Direct Way to Write it: 
const{Schema, model, default: mongoose} = require("mongoose");

//! Creating thr Schema for contact Us form: for the collection in DatabAse DB
const contactSchema = new Schema({
    username: {
        type: String,
        required: true,              // means khali nhi chodh skte yeh postn!
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

//! Creating a model/collection:
const Contact = new model("Contact",contactSchema);
module.exports = Contact;






