const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./model/SportKart");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/SportsKart");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Define route for creating users
app.post("/users", (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
app.listen(3000, () => {
  console.log("Server is Running");
});
