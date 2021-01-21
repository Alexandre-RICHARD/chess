const { Router } = require('express');
const router = Router();

// Notre router qui va seulement s'occuper des requêtes mais ne redirige vers aucune page
const chessController = require('./controllers/chessController');

router.get('/board/data', chessController.getBoardData);

module.exports = router;