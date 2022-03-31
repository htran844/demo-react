require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const productRouter = require("./routers/productRouter");
const accountRouter = require("./routers/accountRouter");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const URI =
  "mongodb+srv://viet:12345@cluster0.ghddm.mongodb.net/asignment?retryWrites=true&w=majority";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", productRouter);
app.use("/account", accountRouter);
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => {
      console.log(`server runing on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
