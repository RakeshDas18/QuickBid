const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const { registerUser } = require("../controllers/authController");

router.post("/register", verifyToken, registerUser);

module.exports = router;
