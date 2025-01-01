import express from "express";
import dbcon from "../config/dbConfig.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const selectUser = "SELECT * FROM users WHERE email = ?";

  dbcon.query(selectUser, [email], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    if (data.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = data[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: "Error verifying password" });
      }

      if (!isMatch) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      return res.json({ message: "Login successful", user });
    });
  });
});

// Signup route
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const checkEmailQuery = "SELECT * FROM users WHERE email = ?";

  dbcon.query(checkEmailQuery, [email], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    if (data.length > 0) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const insertUser =
      "INSERT INTO users (`name`, `email`, `password`) VALUES (?, ?, ?)";

    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return res.status(500).json({ error: "Error generating salt" });
      }

      bcrypt.hash(password, salt, (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ error: "Error hashing password" });
        }

        dbcon.query(insertUser, [name, email, hashedPassword], (err, data) => {
          if (err) {
            return res.status(500).json({ error: "Error inserting user" });
          }

          return res.status(201).json({ message: "User created successfully" });
        });
      });
    });
  });
});

export default router;
