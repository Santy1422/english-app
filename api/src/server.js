// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// const cors = require('cors');
const { checkJwt, firebaseAdmin, setAdmin, extractUserData } = require('./utils/firebase-stuff');
const {globalLimit} = require('./utils/rate-limiters');

// permite leer archivo .env
require('dotenv').config();

//#region  MONGOOSE  
// mongoose.set('strictQuery', true)
// let MONGOUSER= "mongo"
// let MONGOPASSWORD = "bryxl0WFeD3IetwBzAIc"
// let MONGOHOST = "containers-us-west-28.railway.app:6726"
// let MONGOPORT = 6726
// DATABASE_NAME = "ingles"
// //mongodb://${{ MONGOUSER }}:${{ MONGOPASSWORD }}@${{ MONGOHOST }}:${{ MONGOPORT }}
// // Agrega aquí las variables de entorno necesarias para conectarte a tu base de datos de MongoDB
// // const DATABASE_URL = 'mongodb://' + MONGOUSER + ':' + MONGOPASSWORD + '@' + MONGOHOST + ':' + MONGOPORT + '/' + DATABASE_NAME;
// // // const DATABASE_URL = `mongodb://${ MONGOUSER }:${MONGOPASSWORD }@${ MONGOHOST }:${ MONGOPORT }/ingles`
// // async function main() {
// //   // Conecta mongoose a la database
// //   await mongoose.connect(DATABASE_URL);
// // }

// mongoose.set('strictQuery', true)
// const DATABASE_URL = MONGOHOST ? MONGOHOST : 'MONGOHOST';
// const DATABASE_NAME = DATABASE_NAME || 'ingles';
// async function main() {//conecta mongoose a la database
//          await mongoose.connect(DATABASE_URL+"/"+DATABASE_NAME);
// // use  `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

let conexion = "mongodb://mongo:bryxl0WFeD3IetwBzAIc@containers-us-west-28.railway.app:6726"

async function main() {//conecta mongoose a la database
         await mongoose.connect(conexion);
// use  `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch(err => console.log({error: 'Error al conectar con la database' + err.message})); //como main es asincronica, es una promesa, tiene .catch:
//#endregion

// main().catch(err => console.log({error: 'Error al conectar con la database' + err.message})); //como main es asincronica, es una promesa, tiene .catch:
//#endregion


// main().catch(err => console.log({error: 'Error al conectar con la database' + err.message}));

//#endregion

const create = async () => {
  // Crea el servidor de express, no lo inicia todavía, tiene que iniciarlo luego de conectar a la base de datos
  const app = express();
  
  // MIDDLEWARES, se meten en todos los request y en todos los sends
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));
//   app.use(cookieParser());
  app.use(morgan('dev'));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  // FIN MIDDLEWARES
  
  // Todas las Rutas:
  app.use(routes);

  app.get('/check', checkJwt, async (req, res) => {
    //setAdmin(req.user.uid)
    try {
      res.send({ message: 'Token decodificado exitosamente!', user: req.user });
    } catch (err) {
      res.send({ message: 'el back exploto' + err.message });
    }
  });

  return app;
};

module.exports = {
  create
};