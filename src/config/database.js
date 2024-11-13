const mongoose = require("mongoose");
const CONNECTION_STRING =
  "mongodb+srv://ankmahule:jKBWradReMcA1WKf@learnnodejs.aveju.mongodb.net/devTinder";
const connectDB = async () => {
  await mongoose.connect(CONNECTION_STRING);
};

module.exports = connectDB;
