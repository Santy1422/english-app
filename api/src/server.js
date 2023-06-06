// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// const cors = require('cors');

// permite leer archivo .env

require('dotenv').config();


//#region  localhost  
mongoose.set('strictQuery', true)
const DATABASE_URL = process.env.DATABASE_URL ? process.env.DATABASE_URL : 'mongodb://localhost:27017';
const DATABASE_NAME = process.env.DATABASE_NAME || 'findahome';
async function main() {//conecta mongoose a la database
         await mongoose.connect(DATABASE_URL+"/"+DATABASE_NAME);
}
// #region  MONGOOSE  

// deploy
// let conexion = "mongodb://mongo:bryxl0WFeD3IetwBzAIc@containers-us-west-28.railway.app:6726"

async function main() {//conecta mongoose a la database
         await mongoose.connect(conexion);
// use  `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test')
}

main().catch(err => console.log({error: 'Error al conectar con la database' + err.message})); //como main es asincronica, es una promesa, tiene .catch:
//#endregion

// main().catch(err => console.log({error: 'Error al conectar con la database' + err.message})); //como main es asincronica, es una promesa, tiene .catch:
// #endregion


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
    // res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  // FIN MIDDLEWARES
  
  // Todas las Rutas:
  app.use(routes);

  

  return app;
};

module.exports = {
  create
};

