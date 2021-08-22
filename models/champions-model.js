var mongoose = require('mongoose')
var Schema = mongoose.Schema

var championSchema = new Schema({
    value: {
        id: {
            type: String,
            required: [
                true,
                'El id del campeon es obligatorio'
            ], 
      name: { 
          type: String, 
          required: [
              true, 
              'El name del campeon es obligatorio'
          ], 
      blurb: {
          type: String, 
          required: [
              true, 
              'La descripcion del campeon es obligatoria'
          ],
      tags: [
          { 
              type: String, 
              required: [
                  true,
                  'El id del campeon es obligatorio'
              ]
      ], 
    })

module.exports = mongoose.model('Champion', championSchema)


