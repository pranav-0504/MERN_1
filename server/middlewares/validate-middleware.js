
const validate = (schema) => async (req, res, next) => {

    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body  = parseBody;
        next();
    }
    catch(err){

        console.log("ERROR BY PRANAV",err);

        const status = 422;
        const message = "Fill the Input Properly!";
        // const errorDetails = err.errors[0].message;
        const errorDetails = err.errors?.[0]?.message || err.message || "Validation failed";

        const error = {
            status,
            message,
            extraDetails: errorDetails,
            // errorDetails,
        };

        // console.log(error);          //! error is an object array 
        console.log(error);
        
        //! res.status(400).json({msg: ` validation Failed & Error is: ${message}`});

        next(error);                // error-middleware.js
    }

};


module.exports = validate;


