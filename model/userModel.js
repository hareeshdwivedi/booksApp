const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  referredUser: mongoose.Schema.ObjectId,
  isPaymentMade: Boolean,
  totalEarnings: Number,
});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
