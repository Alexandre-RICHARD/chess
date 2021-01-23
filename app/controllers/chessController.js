const { Chess } = require('../models/index');
const getLegitMoves = require('../chessGameBack/getLegitMoves');

const chessController = {

    boardData: {},

    getBoardData: (req, res) => {
        if (Object.keys(chessController.boardData).length !== 0) {
            res.json(chessController.boardData);
            console.log(Object.keys(chessController.boardData).length);
        } else {
            console.log('L\'objet data est vide');
        }
    },

    getMoveData: async (req, res) => {
        const movesData = getLegitMoves.getAllMoves(chessController.boardData);
        if (Object.keys(movesData).length !== 0) {
            res.json(movesData);
            console.log(Object.keys(movesData).length);
        } else {
            console.log('L\'objet data est vide');
        }
    },

    resetData: async (req, res) => {
        console.log('Le reset se fait');
        try {
            const data = await Chess.findAll({});
            chessController.boardData = data;
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

}
module.exports = chessController;