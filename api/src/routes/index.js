const express = require('express');
const cors = require('cors');

const ingles = require(('./ingles.route.js'))

const router = express.Router();

router.use('/ingles', cors({ origin: 'https://english-app-plum.vercel.app/' }), ingles);

module.exports = router;
