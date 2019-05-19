const db = require("../models");

module.exports = {
    // Query for returning all photos from the DB
    findPhotos: function(req, res) {
        db.Tile.findAll({})
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
    },

    // Query for adding photos to DB, only acually used with postman but it exists here
    addPhoto: function(req, res) {
        db.Tile.create(req.body)
        .then(results => res.json(results))
        .catch(err =>res.status(422).json(err));
    }
}