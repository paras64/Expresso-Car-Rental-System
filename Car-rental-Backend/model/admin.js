const mongoose = require("mongoose");
const { Schema } = mongoose;
const AdminSchema = new Schema({
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
  token: { type: String, requireD: true },
});
const AdminModel = new mongoose.model("admin", AdminSchema);
exports.AdminModel = AdminModel;
