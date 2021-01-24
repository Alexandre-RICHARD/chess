const { Chess } = require('../models/index');
const getMoves = require('../chessGameBack/getMoves');

const chessController = {

    boardData: {},
    cimetary: {},

    getBoardData: (req, res) => {
        if (Object.keys(chessController.boardData).length !== 0) {
            res.json(chessController.boardData);
        } else {
            res.json('L\'objet boardData est vide')
        }
    },

    getMoveData: async (req, res) => {
        const movesData = getMoves.getAllMoves(chessController.boardData);
        if (Object.keys(movesData).length !== 0) {
            res.json(movesData);
        } else {
            console.log('L\'objet data est vide');
        }
    },

    resetData: async (req, res) => {
        console.log('Le reset se fait');
        try {
            const data = await Chess.findAll({});
            chessController.boardData = data;
            res.json('tuc');
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

}
module.exports = chessController;