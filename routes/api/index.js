const router = require('express').Router();
const photoRoutes = require('./photo');

router.use('/photos', photoRoutes)

module.exports = router;