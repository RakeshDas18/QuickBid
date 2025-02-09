const admin = require("firebase-admin");
const dotenv = require("dotenv");

dotenv.config();
const path = require("path");
const serviceAccount = require(path.resolve(__dirname, "../config/serviceAccountKey.json"));


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
