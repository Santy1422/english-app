// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const { checkJwt, firebaseAdmin, setAdmin, extractUserData } = require('./utils/firebase-stuff');
const {globalLimit} = require('./utils/rate-limiters');

// permite leer archivo .env
require('dotenv').config();

//#region  MONGOOSE  
mongoose.set('strictQuery', true)

// Agrega aquí las variables de entorno necesarias para conectarte a tu base de datos de MongoDB
const DATABASE_URL = 'mongodb://' + process.env.DATABASE_USER + ':' + process.env.DATABASE_PASSWORD + '@' + process.env.DATABASE_HOST + ':' + process.env.DATABASE_PORT + '/' + process.env.DATABASE_NAME;

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
  app.use(cors({ origin: '*' })); // Discrimina quién puede hacer peticiones al backend, poner página del frontend al deployar.
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  app.use(globalLimit);
  app.use(express.json({ limit: "50mb" })); // Transforma json en strings automáticamente y viceversa.
  app.use(bodyParser.urlencoded({ extended: true })); // Permite anidación de objetos y arrays
  app.use(express.static('public')); // No recuerdo
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