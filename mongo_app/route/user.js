const User = require("../models/user");
const express = require("express");
const route = express.Router();

// TO GET ALL MEMBERS
route.get('/all_members', async (req,res) => {
    try{
        let msg  = "Success";
        const read = await User.find({}).lean();
        let count = read.length;
        if (count === 0)
            msg = "There are no members";
         
        res.status(200).send({msg, count, read});

    }
    catch(error){
        console.log(error);
    }
});

//TO ADD NEW MEMBERS
route.post("/add", async (req, res) => {
  const { gender, siblings, is_online, age, occupation, name, email } =
    req.body;

  if (!name || !gender || !age || !email)
    return res
      .status(400)
      .send({ status: "error", msg: "All fields must be entered" });

  if (gender != "male" && gender != "female")
    return res
      .status(400)
      .send({ status: "error", msg: "WE DON'T DO THAT HERE!!!!!!!!" });
  try {
    const user = new User();
    user.name = name;
    user.is_online = true;
    user.siblings = siblings;
    user.gender = gender;
    user.email = email;
    user.occupation = occupation;

    await user.save();
    return res.status(200).send({ status: "ok", msg: "success", user });
  } catch (error) {
    console.error(error);
    // handle the error
  }
});

//TO UPDATE AN EXISTING USER
route.put('/update', (req, res) => {

});

module.exports = route;