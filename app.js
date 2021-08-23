const express = require("express");
const bodyParser = require('body-parser');
const app = express();

require('./db-lol/db')
var router = require('./routes')

/* 
 *
 * bodyParser: manejo de datos 
 * Sirve para manejar mejor los datos en JSON para
 * recepciónes como POST y PUT 
 *
*/

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api-rest', router)

// Iniciamos nuestro servidor mediante el puerto 8080

app.listen(8080, () => {
    console.log("El servidor esta encendido en el puerto 8080")
})

module.exports = app
