const AccountModel = require("../models/accountModel");
module.exports.singin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const account = await AccountModel.findOne({
      username: username,
      password: password,
    });
    if (account) {
      res.status(200).json(account);
    } else {
      res.status(400).json("account khong ton tai");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports.signup = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const acc = await AccountModel.findOne({
      username: username,
      password: password,
    });
    if (acc) {
      res.status(400).json("tai khoan da ton tai");
    } else {
      //   const account = await AccountModel.create({
      //     username,
      //     password,
      //     role: 2,
      //   });
      account = new AccountModel({
        username,
        password,
        role: 2,
      });
      await account.save();
      res.status(200).json(account);
    }
    console.log(account);
  } catch (error) {
    res.status(500).json(error);
  }
};
