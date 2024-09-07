const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt'); 
const saltRounds = 10;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String, 
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
})


//Adding method to userSchema
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds), null);
  };


module.exports = mongoose.model("User", userSchema);