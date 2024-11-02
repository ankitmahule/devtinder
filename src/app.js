const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello from Ankit");
});

app.use("/hello", (req, res) => {
  res.send("Hello from server");
});

app.use("/test", (req, res) => {
  res.send("Hello test from server");
});

app.listen(3000, () => {
  console.log("server is listening");
});
