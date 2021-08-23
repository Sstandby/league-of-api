var mongoose = require('mongoose')
var Schema = mongoose.Schema

var championSchema = new Schema({
    Nombre: { type: String, required: false},
    Descripción: { type: String, required: false },
    Tipo: { type: String, required: false },
    Vida_inicial: { type: Number, required: false }
})

var Champion = mongoose.model('Champion', championSchema)
module.exports = Champion

