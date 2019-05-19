const router = require('express').Router();
const photoRoutes = require('./photo');

// All routes that are /photo go to the photo.js file in /api
router.use('/photo', photoRoutes)

module.exports = router;