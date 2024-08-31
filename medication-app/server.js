//set up mongoose
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const User = require("./models/user.js");
require('dotenv').config({ path: '.env.local' });  // Load .env.local variables
const MONGO_URL = process.env.MONGO_URL;
mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("CONNECTION OPEN");
    })


//set up express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get("/home", async(req,res) => {
  console.log("get home route");
  res.send({response:"get home route"});
});



app.get("/medication/:userid", async (req, res) => {

  const user = await User.findOne({username:req.params.userid});
  return res.json({"user":user})

});

app.post("/medication/:userid", async (req, res) => {
  console.log("req.params.userid:", req.params.userid)
  const user = new User({
    username: req.params.userid,
    password: "testest",
    firstname: "Jane",
    lastname: "doe"
  });
  await user.save();
});