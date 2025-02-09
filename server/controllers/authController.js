const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const { email, name } = req.user;
    const role = req.body.role;

    User.findByEmail(email, (err, results) => {
      if (err) return res.status(500).json({ error: "Database error" });

      if (results.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }

      User.create(email, name, role, (err, result) => {
        if (err) return res.status(500).json({ error: "Registration failed" });

        res.json({ message: "User registered successfully!" });
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
