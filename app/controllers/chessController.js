const {
    Chess
} = require('../models/index');
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

    getMoveData: (req, res) => {
        const movesData = getMoves.getAllMoves(chessController.boardData);
        if (Object.keys(movesData).length !== 0) {
            res.json(movesData);
        } else {
            console.log('L\'objet data est vide');
        }
    },

    resetData: async (req, res) => {
        try {
            const data = await Chess.findAll({});
            chessController.boardData = data;
            console.log('Le reset se fait');
            res.json('OK');
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    tryToMove: (req, res) => {
        try {
            const move = {
                piece_id: req.body.piece_id,
                originCase: req.body.originCase,
                destinationCase: req.body.destinationCase,
                killingMove: (req.body.killingMove === 'true' ? true : false),
            }
            const movesData = getMoves.getAllMoves(chessController.boardData)[`${(move.piece_id.charAt(2) === "b" ? "black" : "white")}Moves`][move.piece_id];
            const result = Object.values(movesData).find(element => 
                element.originCase === move.originCase &&
                element.destinationCase === move.destinationCase &&
                element.killingMove === move.killingMove
            );
            if (result) {
                res.json('OK');
            } else {
                res.status(500).json('Il y a eu triche là (ou problème qui sait-je'.toString());
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    }
}
module.exports = chessController;