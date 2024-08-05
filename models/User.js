const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 5,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    rollNumber:{
      type: String,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    numberArray: {
      type: Array,
    },
    alphabetArray:{
      type: Array,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
