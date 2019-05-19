const db = require("../models");

module.exports = {
    findPhotos: function(req, res) {
        console.log(req.body);
        db.Tile.findAll({})
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
    },

    addPhoto: function(req, res) {
        console.log(req.body);
        db.Tile.create(req.body)
        .then(results => res.json(results))
        .catch(err =>res.status(422).json(err));
    }
}