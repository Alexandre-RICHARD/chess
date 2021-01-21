const Sequelize = require('sequelize');
const sequelize = require('../database');

class Chess extends Sequelize.Model {};

// Notr modele sequelize, tout ce qu'il y a de plus classique
Chess.init({
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    state: Sequelize.NUMBER,
    pos_x: Sequelize.STRING,
    pos_y: Sequelize.NUMBER,
    cell_color: Sequelize.STRING,
    pawn_spec: Sequelize.NUMBER
}, {
    sequelize,
    tableName: "chess"
});

module.exports = Chess;