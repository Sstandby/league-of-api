##leagueoflegends

Esta API-REST fue creada con la intencion de si alguien llega a necesitar de una base para guiarse puede usar esta API basada en leagueoflegends :)

Ire agregando cosas que vaya aprendiendo y quitando otras que no aporten mucho, si ve que puede mejorarse la API hagamelo saber.

##Instalación

Dependencias:

```
npm install
```

Para correr la API:

```
node app.js
```

##Test

Si quiere hacer algun test a la API puede usar Postman o usar en /test/api.test.js

```
npm i -D istanbul
./node_modules/.bin/istanbul cover -x "**/League Of Test/**"  ./node_modules/.bin/_mocha  test/api.test.js
```

##MongoDB

La verdad hasta ahora aprendo el uso de mongodb y es sencillo, sin miedo al exito! :)

Use esto: https://comoinstalar.me/como-instalar-mongodb-en-freebsd-12/
Y me guie de esto otro: https://mongoosejs.com/
