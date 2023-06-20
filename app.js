const express = require("express"); // we require all super-power of express from it's library.
const hostName = "http://localhost";
const port = 3000;
const path = require("path");
const expressLayout = require("express-ejs-layouts"); // always remember "create file by =>layout.ejs"
const db = require("./config/mongoose"); //setting the mongoose
const cookieParser = require("cookie-parser"); // we require all the super power cookies

const app = express();

app.use(expressLayout); //always put this above the route.

app.use(express.urlencoded()); // this is for reading the query from post.

app.use(cookieParser()); // we have use cookieParser 

app.use("/", require("./routes/index")); //middleware always (require) and in this we access the route


app.set("layout extractStyles", true); // set tje layout styles 
app.set("view engine", "ejs"); // we set the view engine
app.set("views", path.join(__dirname, "views"), "views"); //we access the views folder

app.use(express.static("./assets")); // by this we can access the assets folder

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`express running on ${hostName}:${port}`);
});
