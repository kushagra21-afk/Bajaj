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
      required: true,
      min: 6,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      unique: true,
    },
    numberArray: {
      type: Array,
      required: true,
      unique: true,
    },
    alphabetArray:{
      type: Array,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
