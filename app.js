const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cors= require("cors")
const mongodb = require("mongodb")
app.use(cors());
dotenv.config();
const User = require("./models/User");
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
    
  }
);
const bcrypt = require("bcrypt");
//registeration using bcrypt for security 
app.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json("user has been created succesfully please login with the same credentials");
  } catch (err) {
    res.status(500).json(err)
  }
});
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
//routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(process.env.PORT || 8000;, () => {
  console.log("Backend server is running!");
});
