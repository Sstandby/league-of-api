const express = require('express')
const router = require('express').Router()
const championController = require('../controllers/champions-controller')


router.post('/add', championController.add_champ)
router.get('/show', championController.show_champ)

module.exports = router
