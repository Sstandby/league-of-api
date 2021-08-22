// mongoose y pa adentro'

const mongoose = require('mongoose')
var MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/lol-rest'


/* 
 * 
 * se puede usar solamente MONGO_URL
 * lo demas es solamente por si nuestra
 * config de mongodb puede estar obsoleta
 * a ciertas versiones para evitar algun warning.
 *
*/

mongoose.connect('mongodb://localhost/lol-rest', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(() => console.log('Se ha conectado existosamente a mongodb'))
        .catch(error => console.log(`No se ha conectado existosamente a mongodb por el error; ${error.message}`));


mongoose.connection.on('disconnected', function () {
  console.log('Desconeccion de mongodb...')
})

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Desconectando y saliendo de la app...')
    process.exit(0)
  })
})
