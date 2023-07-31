const USER = require("../models/user");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//Register
router.post("/register", async (req, res) => {
  try {
    const user = await USER.findOne({ fullName: req.body.fullName });
    if (user) {
      return res.status(400).json({
        error: "User already registered",
      });
    }
    //Keys
    const { fullName, email } = req?.body;
    //Crypted password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    //User Object
    const _user = new USER({
      fullName,
      password,
      email,
    });
    await _user.save();
    return res.status(201).json({
      message: "User Registration suceesfully !",
      user: _user,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Registration Rejected ${error}  !!`,
      error: error,
    });
  }
});

  
  //

//@LogIn
router.post("/login", async (req, res) => {
  try {
    const user = await USER.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const verPass = await bcrypt.compare(req.body.password, user.password);
    if (!verPass) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      {
        _id: user._id,
        fullName: user.fullName,
        email: user.deposit,
        password: user.productsPurchased,
      },
      "MERNSECRET",
      {
        expiresIn: "24h",
      }
    );
    res.status(200).json({
      message: "Login successfully !",
      token: token,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Login Rejected !!",
      error: error,
    });
  }
});


module.exports = router;