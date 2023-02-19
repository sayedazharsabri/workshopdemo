const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./routers/todo");

const app = express();
app.use(express.json());

app.use("/", todoRouter);

const uri =
  "mongodb+srv://demo:abcd1234@myclass.fczoc.mongodb.net/workshop2023?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err);
  }
  app.listen(3000, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Server Started");
  });
});
