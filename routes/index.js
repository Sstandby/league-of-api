var router = require('express').Router()
var champion = require('./champion')

router.use('/champion', champion)

router.get('/', function(req, res){
    res.status(200).json({
        error: false,
        codigo: 200,
        message: '¡Estas usando nuestra api correctamente!'
    })
})

module.exports = router
