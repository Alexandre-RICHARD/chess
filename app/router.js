const { Router } = require('express');
const router = Router();

const chessController = require('./controllers/chessController');

router.get('/board/data', chessController.getBoardData);

module.exports = router;