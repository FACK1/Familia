const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

app.get("/", (req, res)=>{
  res.send("hello express!");
})

app.get("/home", (req, res)=>{
  res.render("home");
})

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    defaultLayout: "main"
  })
);

module.exports = app
