const express = require("express");
const app = express();
const http = require("http").Server(app);
var cors = require("cors");

app.use(cors());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/web/viewer.html");
});

http.listen(8080, function () {
  console.log("server on!");
});

module.exports = app;
