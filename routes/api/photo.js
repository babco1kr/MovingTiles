const router = require('express').Router();
const photoController = require('../../controllers/photoController');

router.route('/')
    .get(photoController.findPhotos);

router.route('/add')
    .post(photoController.addPhoto);
module.exports = router;