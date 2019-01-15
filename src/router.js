const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/register", userController.register);

module.exports = router;
