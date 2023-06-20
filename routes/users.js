const express = require("express");

const usersController = require("../controllers/user_controllers");

const router = express.Router();

router.get("/profile", usersController.profile);

router.get("/sign_in", usersController.sign_in);
router.get("/sign_up", usersController.sign_up);
module.exports = router;
