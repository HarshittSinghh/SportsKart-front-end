const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./model/employee");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/employee");

// Define route for creating
app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});
app.listen(3000, () => {
  console.log("Server is Running");
});
