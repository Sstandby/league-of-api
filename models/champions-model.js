var mongoose = require('mongoose')
var Schema = mongoose.Schema

var championSchema = new Schema({
    Nombre: String, 
    Descripción: String, 
    Tipo: String,
    Vida_inicial: String 
})

module.exports = mongoose.model('Champion', championSchema)


