const Champion = require('../models/champions-model');

model.export = {

    add_champion: function (req, res){

        let champion = new Champion({
            Nombre: req.body.nombre
            Descripción: req.body.descripción
            Tipo: req.body.tipo
            Vida_inicial: req.body.vida_incial
        })

        champion.save( (err,result) => {   
            if(err){
                return res.status(500).json({
                    error: true,
                    message: `¡Error invocador!.. El intento de guardar aun nuevo campeon no esta funcionando, por el error: ${err}`,
                    code: 0
                });
            }

            if(!result){
                return res.status(404).json({
                    error: true,
                    message: `¡Error invocador!.. No se ha encontrado al campeon en la grieta, por el error: ${err}`,
                    code: 20
                });
            }

            return res.status(200).json({
                error: true,
                message: `¡Se ha añadido correctamente al campeon`,
                data: result,
                code: 10
            }):
        })     
    }

}

