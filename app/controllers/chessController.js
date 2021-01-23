const {
    Chess
} = require('../models/index');

const chessController = {

    boardData: {},
    movesData: {},

    getBoardData: (req, res) => {
        if (Object.keys(this.boardData).length !== 0) {
            console.log(Object.keys(this.boardData).length);
            res.json(this.boardData);
        } else {
            console.log('L\'objet data est vide');
        }
    },

    getMoveData: async (req, res) => {
        if (Object.keys(this.movesData).length !== 0) {
            console.log(Object.keys(this.boardData).length);
            res.json(this.movesData);
        } else {
            console.log('L\'objet data est vide');
        }
    },

    resetData: async (req, res) => {
        try {
            const data = await Chess.findAll({});
            this.boardData = data;
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

}
module.exports = chessController;