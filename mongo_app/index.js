const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.MONGO_URI_LOCAL)
  .catch((error) => console.log(`DB Connection error: ${error}`));
const con = mongoose.connection;

// handle error when opening db
con.on("open", (error) => {
  if (!error) console.log("DB Connection Successful");
  else console.log(`Error Connecting to DB: ${error}`);
});

// handle mongoose disconnect from mongodb
con.on("disconnected", (error) => {
  console.log(`Mongoose lost connection with MongoDB:
    ${error}`);
});

app.use(express.json());

app.use('/user', require('./route/user'));

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));