const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
//updating user details
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id ) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});
//deleting the user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id ) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
});
//showing the user details
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }

});
router.post("/bfhl", async (req, res) => {
  try {
    if(req.body.dose === req.body.times.length){
      await user.updateOne({ $set: req.body });
      res.status(200).json("the medicine has been updated");
    }
    else{
      res.status(403).json("please enter the correct no. of dossage");
    }
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;