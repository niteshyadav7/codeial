const express = require("express");

const { signin, signup, create } = require("../controllers/user_controllers");

const router = express.Router();

router.get("/sign-in", signin);
router.get("/sign-up", signup);

router.post("/create", create);

module.exports = router;
