const db = require("../config/db");

const User = {
  create: (email, name, role, callback) => {
    const query = "INSERT INTO users (email, name, role) VALUES (?, ?, ?)";
    db.query(query, [email, name, role], callback);
  },

  findByEmail: (email, callback) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], callback);
  },
};

module.exports = User;
