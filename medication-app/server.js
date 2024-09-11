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
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST']
}
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors(corsOptions));

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

  // console.log("req.body: ", req.body);
  const { username, email, password, firstname, lastname } = req.body;
  try{
    const existingUser = await User.findOne({email});
    console.log("existingUser: ", existingUser);
    if(existingUser){
      return res.status(400).json({ message: 'Email already in use' });
    } 

    const newUser = new User({
      username,
      email,
      firstname,
      lastname
    });

    const hashedPassword = newUser.generateHash(password);
    newUser.password = hashedPassword;
  
    await newUser.save();
    return  res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
  }
});

app.post("/login", async (req, res) => {
  console.log('req.body: ', req.body);
  const { username, password } = req.body;
  const user = await User.findOne({username});
  console.log('user:', user);
  if(user){
    const isPasswordValid = user.validPassword(password);
    console.log('isPasswordValid: ', isPasswordValid);
    //navigate to home page
    if(isPasswordValid){
      return res.redirect('/');
    }
    return res.status(401).json({message: 'username or password error'});
  }
  return res.status(401).json({message: 'username or password error'});
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});