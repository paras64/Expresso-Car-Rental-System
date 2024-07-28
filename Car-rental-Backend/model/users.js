const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          value
        );
      },
      message: "please enter a valid password",
    },
  },
  orderdetails: [
    {
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      product: {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
      pickuplocation: {
        type: String,
        required: true,
      },
      dropofflocation: {
        type: String,
        required: true,
      },
      pickuptime: {
        type: String,
        required: true,
      },
      dropofftime: {
        type: String,
        required: true,
      },
      pickupdate: {
        type: String,
        required: true,
      },
      dropoffdate: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        min: [18, "Age should be above 18"],
        required: true,
      },
    },
  ],
  token: String,
});
const User = new mongoose.model("user", UserSchema);
exports.User = User;
