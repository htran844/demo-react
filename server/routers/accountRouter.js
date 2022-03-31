const express = require("express");
const controller = require("../controller/accountController.js");
const router = express.Router();
router.get("/signin", controller.singin);
router.post("/signup", controller.signup);
module.exports = router;
