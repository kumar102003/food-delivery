const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken"); // Fixed typo from 'jxt' to 'jsonwebtoken'
const bcrypt = require("bcryptjs");

const jwtSecret = "Mynameisnikhilkumar"; // Secret key for JWT

// Route to create a new user
router.post(
  "/createuser",
  [
    body("email", "Invalid Email format").isEmail(),
    body("password", "Password should be at least 5 characters").isLength({ min: 5 }),
    body("name", "Name should be at least 3 characters").isLength({ min: 3 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

// Route to login a user
router.post(
  "/loginuser",
  [
    body("email", "Invalid Email format").isEmail(),
    body("password", "Password should be at least 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ error: "Try login with correct credentials" });
      }

      const pwdCompare = await bcrypt.compare(password, userData.password);
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ error: "Try login with correct credentials" });
      }

      const data = {
        user: {
          id: userData.id, 
        },
      };

      const authToken = jwt.sign(data, jwtSecret); 

      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

module.exports = router;
