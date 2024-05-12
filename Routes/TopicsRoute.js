

const express = require("express")
const router = express.Router()
const createTopics = require("../Controller/TopicController")
router.route("/topics").post(createTopics)


module.exports = router;