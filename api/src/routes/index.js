const express = require('express');

const ingles = require(('./ingles.route.js'))

const router = express.Router();

router.use('/ingles', ingles);

module.exports = router;
