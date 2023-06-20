const express = require("express");

const { home } = require("../controllers/home_controllers");

const router = express.Router();

router.get("/", home); // WE GET  FROM HOME FIRST GIVE IT'S ROUTE THEN REQUIRE IT.
router.use("/users", require("./users")); // USE IS THE MIDDLEWARE FIRST GIVE IT'S ROUTE THEN REQUIRE IT.

console.log("Router is Loaded!");

module.exports = router;
