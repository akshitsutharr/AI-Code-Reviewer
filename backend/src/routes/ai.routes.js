const express = require('express')
const aiController = require("../controllers/ai.controller.js")
const router = express.Router();

router.post('/get-review',aiController.getreview);

module.exports = router;