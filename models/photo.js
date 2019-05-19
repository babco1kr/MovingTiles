module.exports = function (sequelize, DataTypes) {
    const Tile = sequelize.define("Tile", {
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Tile;
}