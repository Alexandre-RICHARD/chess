const Sequelize = require('sequelize');
const sequelize = require('../database');

class Chess extends Sequelize.Model {};

Chess.init({
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    state: Sequelize.NUMBER,
    pos_x: Sequelize.STRING,
    pos_y: Sequelize.NUMBER,
    cell_color: Sequelize.STRING,
    pawn_spec: Sequelize.NUMBER,
    image: Sequelize.STRING
}, {
    sequelize,
    tableName: "chess"
});

module.exports = Chess;