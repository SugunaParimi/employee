const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello Hasi 1 2 3 4 5");
});
app.listen(3001, () => {
  console.log("running on port 3001");
});
