const router = require('express').Router();
const photoController = require('../../controllers/photoController');

// Depending on the route, it is sent to look for a specific query in the photoContcoller.js file in /controllers
router.route('/')
    .get(photoController.findPhotos);

router.route('/add')
    .post(photoController.addPhoto);
module.exports = router;