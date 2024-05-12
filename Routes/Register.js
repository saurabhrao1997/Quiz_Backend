

const express = require("express")
const router = express.Router()
const {CreateRegister,getRegisteruser} = require("../Controller/RegisterController")
router.route("/register").post(CreateRegister).get(getRegisteruser)


module.exports = router;