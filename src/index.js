const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
  res.send("hello express!");
})

router.get("/home", (req, res)=>{
  res.render("home");
})

module.exports = router
