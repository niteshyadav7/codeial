const express = require("express");
const hostName = "http://localhost";
const port = 2000;
const path = require("path");

const expressLayout = require("express-ejs-layouts"); // require "express-ejs-layouts" from it's package.

const app = express();

app.use(expressLayout); //use express-ejs-layouts.

app.use("/", require("./routes/index")); //here provide the routes.

app.set("layout extractStyles", true); //SETUP THE LAYOUT STYLES
app.set("view engine", "ejs"); // SETTING UP THE VIEW ENGINE :
app.set("views", path.join(__dirname, "views"), "views"); //JOIN THE PATH TO THE VIEWS TO ACCESS IT:

app.use(express.static("./assets")); //  WE CAN ACCESS THE ASSETS FOLDER.

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`express running on ${hostName}:${port}`);
});
