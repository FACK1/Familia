const express = require('express');
const app = express();


app.get("/", (req, res)=>{
  res.send("Hello express!")
})


app.set("PORT", 6002)
app.listen(app.get("PORT"), ()=>{
  console.log(`The Server Is Up And Running`);
})
