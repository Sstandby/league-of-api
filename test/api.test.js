'use strict'
/* global describe it */
var request = require('supertest')

/*obtenemos nuestra api rest que vamos a testear*/
var app = require('../app')

describe('Añadiendo heroe nuevo!', function() {
  it('Creando champ con un retun de 201', function(done) {
    request(app)
      .post('/api-rest/add')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({
        'Nombre': 'Zoé',
        'Descripción': 'Zoé es una banda mexicana de rock formada en 1997 en Cuernavaca, México. La banda es liderada por León Larregui y conformada por Sergio Acosta (guitarra), Jesús Báez (teclados), Ángel Mosqueda (bajo) y Rodrigo Guardiola (batería). El grupo tiene influencias del Rock Psicodélico, Baladas románticas, y del Pop Rock.',
        'Tipo': 'Mago',
        'Vida_inicial': '0.2'
      })
      .expect(201, function(err,res){
          if(err){
              console.log("error");
              done(err);
          } else {
              console.log(res);
              done();
          }
      })
  });
});

