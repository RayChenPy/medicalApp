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

// Optional: Parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true })); //can see body, but empty, only after using this

// ** Add Middleware to Parse JSON **
app.use(express.json()); // can see the content of body only after using this

//password hashing
const bcrypt = require('bcrypt');  


app.get("/", async(req,res) => {
  console.log("get home route");
  res.send({response:"got home route"});
});



app.get("/medication/:userid", async (req, res) => {

  const user = await User.findOne({username:req.params.userid});
  return res.json({"user":user})

});

app.post("/medication/:userid", async (req, res) => {
  console.log("req.params.userid:", req.params.userid);
  return res.json({message: "medication data is sent to DB!"})

});


app.post("/signup", async (req, res) => {

  //hardcoded
  // console.log("req.params.userid:", req.params.userid);

  //passed by Postman
  console.log("req.body: ", req.body);
  const { username, email, password, firstname, lastname } = req.body;
  try{
    const existingUser = await User.findOne({email});
    console.log("existingUser: ", existingUser);
    if(existingUser){
      return res.status(400).json({ message: 'Email already in use' });
    } 
    //hardcoded
    // const newUser = new User({
    //   username: req.params.userid,
    //   email:"test.com",
    //   password: "testest",
    //   firstname: "Jane",
    //   lastname: "doe"
    // });

    
    //passed by Postman
    const newUser = new User({
      username,
      email,
      firstname,
      lastname
    });

    const hashedPassword = newUser.generateHash(password);
    newUser.password = hashedPassword;
  
    await newUser.save();
    return res.json({"newUser" : newUser})

    // try {
    //   const { username, email, password, firstname, lastname } = req.body;

    //   // Create a new user in MongoDB
    //   const newUser = new User({ username, email, password, firstname, lastname });
    //   await newUser.save();

    //   res.status(201).json({ message: 'User registered successfully' });
    // } catch (error) {
    //     res.status(500).json({ message: 'Error registering user', error });
    // }

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});