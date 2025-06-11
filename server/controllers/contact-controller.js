const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {

    try{
    
        console.log("REQUESTED DATA BY USER IS: ",req.body);
    
        const response = req.body;      // jo bhi data POST karunga vo isme ajayega!
        await Contact.create(response);                 // Database me Data Add krdia hai!

        return res.status(200).json({message: "Message Send Succesfully!"});
    }
    catch(error){
        return res.status(500).json({message: "Message Not Dilevered"});
    }
};


module.exports = contactForm;





