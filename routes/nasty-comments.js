const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/nasty-comments')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.createOne)
router.put('/:id', ctrl.replaceOne)
router.delete('/:id', ctrl.deleteOne)


module.exports = router
