

const express = require("express")
const router = express.Router()
const ResultUpdate = require("../Controller/ResultController")
router.route("/result").post(ResultUpdate)


module.exports = router;