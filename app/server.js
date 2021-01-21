// Notre module serveur appelé en second après index.js. Il sert de fichier de configuration et "centre de contrôle"
const express = require('express');         //? Express qui s'occupe de créer le serveur
require('dotenv').config();                 //? Dotenv qui nous propose d'utiliser .env
const router = require('./router');         //? On demande notre router
const multer = require('multer');           //? On require multer

const app = express();                              //? On créer app, notre futur serveur
app.use(express.static(__dirname + './../public')); //? Notre app utilise comme répertoire pour toute demande de fichier "public"
// const parser = multer();                         //!
// app.use(parser.none());                          //! Ces trois lignes ne servent à rien pour le moment
// app.use(express.json());                         //!
app.use(router);                                    //? On utilise notre router qui va s'occuper de toute les requêtes

const PORT = process.env.PORT;  //? On récupère le port de notre .env
const start = () => {           //? Notre fonction start appelé depuis index.js, notre point d'entre qui démarre notre serveur
    app.listen(PORT, () => {
        console.log(`Notre serveur fonctionne bien sur le port ${PORT}.`);
    });
}

module.exports = {
    start           //? On exporte notre module
};