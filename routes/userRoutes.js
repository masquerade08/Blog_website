const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controlers/userController");

//router object
const router = express.Router();
//GET ALL USER||GET
router.get("/all-users", getAllUsers);

//CREATE USER || POST
router.post("/register", registerController);

//LOGIN||POST
router.post("/login", loginController);

module.exports = router;
