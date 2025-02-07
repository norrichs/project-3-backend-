require("dotenv").config();
const express = require("express");
const mongoose = require("./db/connection");
const tripsController = require("./controllers/trip")
const app = express();
const PORT = process.env.PORT
//imports
const cors = require("cors")
const morgan = require("morgan")

//midleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });



app.use('/trips', tripsController)

app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});