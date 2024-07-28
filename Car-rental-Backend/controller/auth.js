const model = require("../model/users.js");
const User = model.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

exports.register = async (req, res) => {
  const doc = await User.findOne({ email: req.body.email });
  if (doc) {
    // User not found
    res.status(401).json({ message: "User already exists, Please login" });
    return;
  }

  const user = new User(req.body);
  const token = jwt.sign(req.body, privateKey, { algorithm: "RS256" });
  const hash = bcrypt.hashSync(req.body.password, 10);
  user.token = token;
  user.password = hash;
  user
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Email already exists", err });
    });
};

exports.login = async (req, res) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    if (!doc) {
      // User not found
      res
        .status(400)
        .json({ message: "Invalid email, Please Register if not" });
      return;
    }
    const isAuth = bcrypt.compareSync(req.body.password, doc.password);
    if (isAuth) {
      const token = jwt.sign(req.body, privateKey, {
        algorithm: "RS256",
      });
      doc.token = token;
      doc
        .save()
        .then((data) => {
          res.status(200).json({ message: "Checking details...", data: data });
        })
        .catch((err) => {
          res.status(400).json({ message: "Something went wrong" });
        });
    } else {
      res.status(400).json({
        message: "Incorrect Password, Please try again with correct details",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "bad request", err: err });
  }
};
