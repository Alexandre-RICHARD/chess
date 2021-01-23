const Sequelize = require('sequelize');
const sequelize = require('../database');

class Chess extends Sequelize.Model {};

// Notr modele sequelize, tout ce qu'il y a de plus classique
Chess.init({
    x: Sequelize.NUMBER,
    y: Sequelize.NUMBER,
    case_colour: Sequelize.STRING,
    is_piece: Sequelize.BOOLEAN,
    control_by_white: Sequelize.BOOLEAN,
    control_by_black: Sequelize.BOOLEAN,
    piece_name: Sequelize.STRING,
    piece_id: Sequelize.STRING,
    piece_color: Sequelize.STRING,
    pawn_just_move_two: Sequelize.BOOLEAN,
    already_move: Sequelize.BOOLEAN,
}, {
    sequelize,
    tableName: "chess"
});

module.exports = Chess;