const Sequelize = require('sequelize');
const sequelize = require('../database');

class Chess extends Sequelize.Model {};

// Notr modele sequelize, tout ce qu'il y a de plus classique
Chess.init({
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    state: Sequelize.NUMBER,
    pos_x: Sequelize.NUMBER,
    pos_y: Sequelize.NUMBER,
    cell_color: Sequelize.STRING
}, {
    sequelize,
    tableName: "chess"
});

module.exports = Chess;