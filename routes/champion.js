var router = require('express').Router()

router.get('/search', function(req, res){
    res.send('¡Buscando campeones de la grieta!')
})

router.get('/', function(req,res){
    res.json({
        message: '¡Conectando con la api..!',
        recurso: 'champion'
    })
})


router.get('/:id', function(req,res){
    res.json({
        message: 'champion por Id',
        id: req.params.id
    })
})


router.post('/', function(req, res){
    res.json({
        message: 'Añadiendo campeon nuevo',
    })
})

router.put('/:id', function(req, res){
    res.json({
        message: 'Actualizando campeon..',
        Id: req.params.Id
    })
})

router.delete('/:id', function(req, res){
    res.json({
        message: 'Borrando campeon de la API..',
        id: req.params.id
    })
})

module.exports = router
