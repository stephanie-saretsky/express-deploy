let express = require("express");
app = express();
app.get("/", (req, res) => {
  res.send("Goodbye world");
});
app.listen(3000);
