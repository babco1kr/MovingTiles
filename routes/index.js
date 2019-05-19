const router = require('express').Router();
const apiRoutes = require('./api');

// All routes that start with /api go to the index.js file in /api
router.use('/api', apiRoutes);

module.exports = router;