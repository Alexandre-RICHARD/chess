const {
    Chess
} = require('../models/index');
const getMoves = require('../chessGameBack/getMoves');

const chessController = {

    boardData: {},
    cimetary: [],

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
            res.json('L\'objet movedata est vide');
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
                const destCase = chessController.boardData.find(element => element.x === parseInt(move.destinationCase.charAt(0), 10) && element.y === parseInt(move.destinationCase.charAt(1), 10))
                const origCase = chessController.boardData.find(element => element.piece_id === move.piece_id)
                if (move.killingMove === true) {
                    //! Pas encore de prise en compte de la prise en passant
                    const deadPiece = {
                        pieceName: destCase.piece_name,
                        pieceId: destCase.piece_id,
                        pieceColor: destCase.piece_color,
                    }
                    chessController.cimetary.push(deadPiece);
                    chessController.boardData[destCase.id - 1].piece_name = origCase.piece_name;
                    chessController.boardData[destCase.id - 1].piece_id = origCase.piece_id;
                    chessController.boardData[destCase.id - 1].piece_color = origCase.piece_color;
                    chessController.boardData[destCase.id - 1].pawn_just_move_two = origCase.pawn_just_move_two;
                    chessController.boardData[destCase.id - 1].already_move = origCase.already_move;
                    chessController.boardData[origCase.id - 1].piece_name = null;
                    chessController.boardData[origCase.id - 1].piece_id = null;
                    chessController.boardData[origCase.id - 1].piece_color = null;
                    chessController.boardData[origCase.id - 1].pawn_just_move_two = null;
                    chessController.boardData[origCase.id - 1].already_move = null;
                } else {
                    chessController.boardData[destCase.id - 1].piece_name = origCase.piece_name;
                    chessController.boardData[destCase.id - 1].piece_id = origCase.piece_id;
                    chessController.boardData[destCase.id - 1].piece_color = origCase.piece_color;
                    chessController.boardData[destCase.id - 1].pawn_just_move_two = origCase.pawn_just_move_two;
                    chessController.boardData[destCase.id - 1].already_move = origCase.already_move;
                    chessController.boardData[origCase.id - 1].piece_name = null;
                    chessController.boardData[origCase.id - 1].piece_id = null;
                    chessController.boardData[origCase.id - 1].piece_color = null;
                    chessController.boardData[origCase.id - 1].pawn_just_move_two = null;
                    chessController.boardData[origCase.id - 1].already_move = null;
                }
            } else {
                res.status(500).json('Il y a eu triche là (ou problème qui sait-je)'.toString());
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    }
}
module.exports = chessController;