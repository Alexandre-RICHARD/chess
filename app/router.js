const { Router } = require('express');
const router = Router();

const chessController = require('./controllers/chessController');

router.get('/', chessController.chessGame);
router.use('*', (req, res) => {
    res.status(404).render('404');
  });

module.exports = router;