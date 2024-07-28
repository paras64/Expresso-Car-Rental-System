const mongoose = require("mongoose");
const { Schema } = mongoose;

const SubscribeSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    match: [
      /^[a-zA-Z]+ [a-zA-Z]+(?: [a-zA-Z'-]+)*$/,
      "Please enter a valid full name",
    ],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: "Please enter a valid email",
    },
  },
});
const Subscribe = new mongoose.model("subscriber", SubscribeSchema);
exports.Subscribe = Subscribe;
// "Kartik" "kartik" "Kartik gothwal" "kartik Gothwal"