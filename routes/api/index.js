const router = require('express').Router();
const photoRoutes = require('./photo');

router.use('/photo', photoRoutes)

module.exports = router;