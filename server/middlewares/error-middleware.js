//! For ERROR HANDLING!


const errorMiddleWare = (err, req, res, next) => {

    const status = err.status || 500;                                    // OR
    const message = err.message || "BACKEND ERROR";                     // OR
    const extraDetails = err.extraDetails || "Error From Backend";

    return res.status(status).json({message, extraDetails});
};

module.exports = errorMiddleWare;



