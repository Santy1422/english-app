const express = require('express');
const cors = require('cors');

//agregar mas importaciones de ruta aca:
// const userRoute = require('./user.route');
// const petRoute = require('./pet.route');
// const filtroRoute = require('./filter.route');
// const pushNotify = require('./pushNotify.route');
// const adminRoute = require('./admin.route')
// const mercadopago = require('./mercadopago.route')
const ingles = require(('./ingles.route.js'))
// const { route } = require('./user.route');

const router = express.Router();
//agregar middleware de rutas aca:
// router.use('/user', userRoute)
// router.use('/pet', petRoute)
// router.use('/pet/filter', filtroRoute)
// router.use('/send', pushNotify)
// router.use('/admin', adminRoute)
// router.use('/donation', mercadopago)
router.use('/ingles', ingles)
const corsOptions = {
    origin: 'https://english-app-santy1422.vercel.app/'
  };
  router.use(cors(corsOptions));
module.exports = router;
