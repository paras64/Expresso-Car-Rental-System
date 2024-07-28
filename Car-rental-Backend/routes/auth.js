const express = require("express");
const router = express.Router();

const AuthController = require("../controller/auth.js");
router
  .post("/register", AuthController.register)
  .post("/login", AuthController.login);

exports.router = router;
