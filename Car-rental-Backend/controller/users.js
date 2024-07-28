const model = require("../model/users.js");
const User = model.User;
const jwt = require("jsonwebtoken");
// const path = require("path");
// const fs = require("fs");
// const publicKey = fs.readFileSync(
//   path.join(__dirname, "../mypublic.pem"),
//   "utf-8"
// );
require("dotenv").config();
const publicKey = process.env.PUBLIC_KEY;
exports.getUser = async (req, res) => {
  try {
    const decode = jwt.verify(req.params.token, publicKey, {
      algorithms: "RS256",
    });
    if (!decode) {
      res.status(400).json({ message: "unauthorised user" });
      return;
    }

    const doc = await User.findOne({ email: decode.email }).populate(
      "orderdetails.product"
    );
    res.status(200).json({ doc });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const doc = await User.find().populate("orderdetails.product");
    res.status(200).json({ doc: doc });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getOrders = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { email } = req.query;
  try {
    const doc = await User.findOne({ email: email }).populate(
      "orderdetails.product"
    );
    if (!doc) {
      res.status(200).json({ message: "No orders found" });
    }
    res.status(200).json(doc.orderdetails);
  } catch {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.Order = async (req, res) => {
  try {
    const { orderDetails, UserDetails } = req.body;
    const user = await User.findOne({ email: UserDetails.email });
    if (!user) {
      res.status(400).json({ message: "User Not Found" });
      return;
    }
    user.orderdetails.push(orderDetails);

    await user
      .save()
      .then((response) => {
        res.status(201).json({ message: "Order Booked", response });
      })
      .catch((err) => {
        res.status(500).json({ message: "Something went wrong" }, err);
      });
  } catch {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { ID } = req.params;
    const doc = await User.findByIdAndDelete(ID);
    res.status(200).json({ message: "User has been deleted" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong, deleteing failed" });
  }
};
