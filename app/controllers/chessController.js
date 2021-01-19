const {
    Chess
} = require('../models/index');

const chessController = {

    getBoardData: async (req, res) => {
        try {
            const data = await Chess.findAll({
            });
            res.json(data);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

}
module.exports = chessController;