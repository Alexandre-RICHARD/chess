const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const router = require('./router');
const multer = require('multer');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + './../public'));
const parser = multer();
app.use(parser.none());
app.use(express.json());
app.use(router);

const start = () => {
app.listen(PORT, () => {
    console.log(`Notre serveur fonctionne bien sur le port ${PORT}.`);
});
}

module.exports = {
    start
};