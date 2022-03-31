const mongoose = require("mongoose");
const AccountSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    role: Number,
  },
  {
    collection: "account",
  }
);
const AccountModel = mongoose.model("account", AccountSchema);
module.exports = AccountModel;
