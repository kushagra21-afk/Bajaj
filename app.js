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
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
//routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(8000, () => {
  console.log("Backend server is running!");
});
