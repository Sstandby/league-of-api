const Champion = require('../models/champions-model')

function add_champ(req, res) {

        /*
         * let champion = new Champion({
            Nombre: req.body.nombre,
            Descripción: req.body.descripcion,
            Tipo: req.body.tipo,
            Vida_inicial: req.body.vida_incial
        })
        */
        var champion = new Champion(req.body)
        champion.save((err, champion) => {
      
            if (err) {
                return res.status(500).json({
                    error: true,
                    message: `¡Error invocador!.. El intento de guardar aun nuevo campeon no esta funcionando, por el error: ${err}`,
                    code: 0
                });
            }

            if (!champion) {
                return res.status(404).json({
                    error: true,
                    message: `¡Error invocador!.. No se ha encontrado al campeon en la grieta, por el error: ${err}`,
                    code: 20
                });
            }

            return res.status(201).json({
                error: true,
                message: `¡Se ha añadido correctamente al campeon`,
                data: champion,
                code: 10
            });
        });
}


function show_champ(req, res) {
       // var id = req.params.id
       Champion.find().exec((err, champion) => {
            if (err) {
                return res.status(500).json({
                    error: true,
                    message: `¡Error invocador..! El servidor tuvo un error: ${err}`,
                    code: 500
                });
            }
           if (!champion){
                return res.status(404).json({
                    error: true,
                    message: `¡Eror invocador! No existe ningun champ en la base de datos :()`,
                    code: 404
                });
           }
            
            return res.status(200).json({
                error: false,
                message: `¡OK!`,
                data: champion,
                code: 200
            });
       });
}

module.exports = {
    add_champ,
    show_champ
};
