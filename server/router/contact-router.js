const express = require("express");
const router = express.Router();

// MAIN:
const contactForm = require("../controllers/contact-controller");           // main thing

// Routes:
router.route("/contact").post(contactForm);

// Exports:
module.exports = router;







