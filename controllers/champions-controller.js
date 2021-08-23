const Champion = require('../models/champions-model')

// este controlador es para agregar champs en la db

function add_champ(req, res) {

        /*
         * let champion = new Champion({
            Nombre: req.body.nombre,
            Descripción: req.body.descripcion,
            Tipo: req.body.tipo,
            Vida_inicial: req.body.vida_incial
        })
        */
        
        const champion = new Champion(req.body)
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
                message: `¡Se ha añadido correctamente al campeon!`,
                data: champion,
                code: 10
            });
        });
}

// Este controlador es para actualizar un campeon

function up_champ(req,res) {
    const id = req.params.id;
    Champion.findByIdAndUpdate({_id: id}, champion, { new: true}, (err,result) => {
        if (err){
            return res.status(500).json({
                error: true,
                message: `¡Error en el servidor invocador!, para saber mas de él; ${error}`,
                code: 500
            });
        }

        if (!result){
            return res.status(404).json({
                error: true,
                message: '¡Invocador! El champion que quiere agregar no esta en esta lista, por favor',
                code: 404
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Actualización del champ... ¡Lista!',
            data: result,
            code: 200
        });
    });
}

// Este controlador es para buscar algo en concreto en la DB

function search_champ(req, res) {
       const q = req.query.q
       Champion.find({$text: { $search: q }}).exec((err, champion) => {
            if (err) {
                return res.status(500).json({
                    error: true,
                    message: `¡Error invocador..! El servidor tuvo un error: ${err}, y no se puedo realizar la busqueda deseada :(`,
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
                message: `¡OK, tu busqueda esta lista, invocador!`,
                data: champion,
                code: 200
            });
       });

}

// Este controlador es para eliminar un champ por ID..!

function del_champ(req, res) {
       const id = req.params.id
       Champion.findByIdAndRemove(id, function(err, champion){
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
                message: `¡OK, invocador! El campeon que quisiste eliminar por ID estuvo exitoso`,
                data: champion,
                code: 200
            });
       });

}

// Controlador para eliminar varios champs por ID!

function del_multi_champ(req, res) {
       const id = req.params.id
       Champion.deleteMany({vida_incial:{$eq:id}}, function(err, champion){
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
                message: `¡OK, invocador! El borrado de filtro que quisiste hacer por campeones fue exitoso `,
                data: champion,
                code: 200
            });
       });

}

// Este controlador es para ver todo lo que hay dentro de la DB

function show_champ(req, res) {

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

// Busqueda por ID; no se me ocurrio una idea "etica" para juntar tood en show

function show_champ_id(req, res) {
       const id = req.params.id
       Champion.findOne({_id: id}, function(err, champion){

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
    show_champ,
    show_champ_id,
    up_champ,
    search_champ,
    del_champ,
    del_multi_champ
};
