const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FaqSchema = new Schema({
  question: {
    type: String,
    maxLength: [65, "max length reached"],
    required: true,
  },
  answer: {
    type: String,
    maxLength: [210, "max length reached"],
    required: true,
  },
});
const FaqModel = new mongoose.model("faq", FaqSchema);
exports.FaqModel = FaqModel;
