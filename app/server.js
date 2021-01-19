const express = require('express');
const PORT = process.env.PORT || 3000;
const router = require('./router');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + './../assets'));
app.use(router);

const start = () => {
app.listen(PORT, () => {
    console.log(`Notre serveur fonctionne bien sur le port ${PORT}.`);
});
}

module.exports = {
    start
};