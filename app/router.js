const {
    Router
} = require('express');
const router = Router();

// Notre router qui va seulement s'occuper des requêtes mais ne redirige vers aucune page
const chessController = require('./controllers/chessController');

router.get('/board/data', chessController.getBoardData);
router.get('/move/data', chessController.getMoveData);
router.get('/game/reset', chessController.resetData);
router.post('/move/try', chessController.tryToMove);

module.exports = router;