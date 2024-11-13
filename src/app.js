const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/users");
const app = express();

app.use(express.json());

app.get("/feed", async (req, res) => {
  const id = req.body.id;
  try {
    const users = await User.find(id);
    if (users.length === 0) {
      res.status(404).send("User not found");
    }
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong" + err);
  }
});

app.get("/user", async (req, res) => {
  const id = req.body.id;
  try {
    const users = await User.findById(id);
    if (!users) {
      res.status(404).send("User not found");
    }
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong" + err);
  }
});

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Something went wrong" + err);
  }
});

connectDB()
  .then(() => {
    console.log("Connection Successful");
    app.listen(7777, () => {
      console.log("server is listening");
    });
  })
  .catch((err) => {
    console.log("Error occured" + err);
  });
