const express = require("express");
const router = express.Router();
const TestimonialController = require("../controller/testimonial");
const jwt = require("jsonwebtoken");
// const path = require("path");
// const fs = require("fs");
// const publicKey = fs.readFileSync(
//   path.join(__dirname, "../mypublic.pem"),
//   "utf-8"
// );
require("dotenv").config();
const publicKey = process.env.PUBLIC_KEY;
const Authorization = (req, res, next) => {
  try {
    const decode = jwt.verify(req.params.token, publicKey, {
      algorithms: "RS256",
    });
    if (decode) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized User" });
    }
  } catch (err) {
    console.error("JWT verification error:", err);
    res.status(401).json({ message: "Unauthorized User" });
  }
};
router
  .get("/", TestimonialController.getTestimonialData)
  .post("/addtestimonial", TestimonialController.createTestimonial)
  .delete(
    "/deletetestimonial/:ID/:token",
    Authorization,
    TestimonialController.deleteTestimonial
  );

exports.router = router;
