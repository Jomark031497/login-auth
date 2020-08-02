//dependencies
const express = require("express");
const morgan = require("morgan"); //Morgan (logger)
const mongoose = require("mongoose");
require("dotenv").config(); //Use dotenv

//initialize express
const app = express();

//Connect to database
mongoose.connect(process.env.db_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => console.log("Connected to MongoDB"));

//middlewares
app.use(express.json()); //body parser
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.send("Hello worlderino");
});

//ports
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running at port ${port}`));
