

const express = require("express")
const router = express.Router()
const Login = require("../Controller/loginController")
router.route("/login").post(Login)


module.exports = router;