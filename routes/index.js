var router = require('express').Router()
var champions = require('./champions')

router.use('/', champions)

router.get('/', function(req, res){
    res.status(200).json({
        error: false,
        codigo: 200,
        message: '¡Estas usando nuestra api correctamente!'
    })
})

module.exports = router
