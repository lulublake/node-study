// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.status(200).send("Hello!!!!!!");
// });
// app.get("/login", (req, res) => {
//     res.status(200).send("Login Successful");
// });
// app.get("/terminate", (req, res) => {
//     process.exit();
// });

// app.listen(3000, () => {
//     console.log("Server running......");
//     console.log(process.pid);
// })

const car = require('./car');
const randomUser = require("../../class");

const {description} = randomUser.results[0].location.timezone;

console.log(description);