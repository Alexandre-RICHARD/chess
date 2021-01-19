const {
    Chess
} = require('../models/index');

const chessController = {

    chessGame: (req, res) => {
        Chess.findAll({}).catch(error => {
            console.trace(error);
            res.status(404).render('404');
        }).then(chessPieces => {
            res.render('chessGame', {
                chessPieces
            })
        })
    },

}
module.exports = chessController;