const express = require ("express");
const router = require ("./route/route");
var cors = require("cors");
const mongoose = require("mongoose");
const { config } = require("dotenv");
config();

const app = express();

app.use(cors());
const port = process.env.Port || 8080;

  // Express midleware
app.use(express.urlencoded({extended: true,}));
app.use(express.json());

app.use("/", router);

app.get("*", (req, res) => {
  res.send("<h2> Page not found</h2>");
});

app.listen(port, () => {
  mongoose
    .connect("mongodb://localhost:27017/EPRDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongodb is connect and running");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`Server is running on PORT ${port} `);
});