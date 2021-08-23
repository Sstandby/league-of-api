const express = require('express')
const router = require('express').Router()
const championController = require('../controllers/champions-controller')


router.post('/add', championController.add_champ)
router.get('/show', championController.show_champ)
router.get('/show-id/:id', championController.show_champ_id)
router.put('/put', championController.up_champ)

// Ej: search?q=

router.get('/search', championController.search_champ)
router.delete('/delete/:id', championController.del_champ)
router.delete('/delete_multiple/:id', championController.del_multi_champ)

module.exports = router
