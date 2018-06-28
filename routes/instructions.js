const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/nasty-comments')

router.get('', ctrl.printInstructions)

module.exports = router
