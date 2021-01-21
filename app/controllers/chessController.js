const {
    Chess
} = require('../models/index');

const chessController = {

    // Un simple controller qui fait une requête à notre DataBase pour récupérer notre board et ses pièces
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