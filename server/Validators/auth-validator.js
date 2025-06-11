const { z } = require("zod"); 

// Creating an object Schema:           //? CREATED FOR SIGNUP TIME:
const signupSchema = z.object({
    username: z
        .string({ required_error: "UserName is Required" })
        .trim()
        .min(3, { message: "UserName must be of minimum 3 characters" })
        .max(255, { message: "UserName must not exceed 255 characters" }),

    email: z
        .string({ required_error: "Email is Required" })
        .trim()
        .email({ message: "Invalid email address format" })             //? INBUILT .email({})
        .min(3, { message: "Email must be of minimum 3 characters" })
        .max(255, { message: "Email must not exceed 255 characters" }),

    phone: z
        .string({ required_error: "Phone number is Required" })
        .trim()
        .min(10, { message: "Phone number must be at least 10 digits" })
        .max(15, { message: "Phone number must not exceed 15 digits" })
        .regex(/^[0-9]+$/, { message: "Phone number must contain only digits" }),
 
    password: z
        .string({ required_error: "Password is Required" })
        .min(6, { message: "Password must be at least 6 characters long" })
        .max(1024, { message: "Password must not exceed 1024 characters" }),

});


const loginValidation = z.object({
    email: z
        .string({ required_error: "Email is Required" })
        .min(1, { message: "Email cannot be empty" })
        .trim()
        .email({ message: "Invalid email address format" }),

    password: z
        .string({ required_error: "Password is Required" })
        .min(1, { message: "Password cannot be empty" })
        .trim(),
});



module.exports = {
    signupSchema,
    loginValidation
};



