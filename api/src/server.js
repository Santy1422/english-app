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
mongoose.set('strictQuery', true)
let MONGOUSER= "mongo"
let MONGOPASSWORD = "bryxl0WFeD3IetwBzAIc"
let MONGOHOST = "containers-us-west-28.railway.app"
let MONGOPORT = 6726
//mongodb://${{ MONGOUSER }}:${{ MONGOPASSWORD }}@${{ MONGOHOST }}:${{ MONGOPORT }}
// Agrega aquí las variables de entorno necesarias para conectarte a tu base de datos de MongoDB
// const DATABASE_URL = 'mongodb://' + process.env.DATABASE_USER + ':' + process.env.DATABASE_PASSWORD + '@' + containers-us-west-28.railway.app + ':' + process.env.DATABASE_PORT + '/' + process.env.DATABASE_NAME;
const DATABASE_URL = `mongodb://${ MONGOUSER }:${MONGOPASSWORD }@${ MONGOHOST }:${ MONGOPORT }/ingles`
async function main() {
  // Conecta mongoose a la database
  await mongoose.connect(DATABASE_URL);
}

main().catch(err => console.log({error: 'Error al conectar con la database' + err.message}));

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
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
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