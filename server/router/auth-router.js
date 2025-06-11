//! EXPRESS ROUTERS
const express = require("express");
const router = express.Router();

const authsControllers = require("../controllers/auth-controller");     //! shortcut

//! MIDDLEWARES:
const {signupSchema, loginValidation} = require("../Validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


//* ROUTES:
router.route("/").get(authsControllers.home);           // HOME PAGE

// // router.route("/register").get(authsControllers.registerPage);     // GET Request     

router.route("/register").post(validate(signupSchema),authsControllers.registerPage);

// router.route("/login").post(authsControllers.login);
router.route("/login").post(validate(loginValidation), authsControllers.login);


//! EXPORTS:
module.exports = router;
 


