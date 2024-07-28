const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
// const path = require("path");
// const fs = require("fs");

// const publicKey = fs.readFileSync(
//   path.join(__dirname, "../mypublic.pem"),
//   "utf-8"
// );
require("dotenv").config();
const publicKey = process.env.PUBLIC_KEY;
const ProductController = require("../controller/products.js");
const auth = (req, res, next) => {
  try {
    const { adminData } = req.body;
    // console.log(adminData);
    const decode = jwt.verify(adminData.token, publicKey, {
      algorithms: "RS256",
    });
    if (decode) {
      next();
    } else {
      console.log("Invalid token");
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    console.error("JWT verification error:", err);
    res.status(401).json({ message: "Unauthorized" });
  }
};
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
  .get("/", ProductController.getAllProducts)
  .post("/addproduct", auth, ProductController.createProduct)
  .patch("/modifyproduct", auth, ProductController.modifyProduct)
  .delete("/deleteproduct/:token/:ID", Authorization, ProductController.deleteProduct);

exports.router = router;
