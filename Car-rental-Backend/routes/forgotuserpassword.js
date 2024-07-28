const express = require("express");
const router = express.Router();
const ForgotPasswordController = require("../controller/forgotpassword");

router
  .get("/:id/:token", ForgotPasswordController.getForgotRequest)
  .post("/", ForgotPasswordController.forgotpassword)
  .post("/update", ForgotPasswordController.updatePassword);

exports.router = router;
