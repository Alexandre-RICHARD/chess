const originData = {

    gameActive: {   //! Cet objet sera synthétisé en fin de partie et envoyé en BDD.
        emptyMovedRow: 0,       //? Compteur de coup "à vide" pour le nul
        moveCounter: 0,         //? Compteur de coups total
        player1: {              //* Objet du joueur 1
            playerName: null,   //? Nom du joueur
            playerType: null,   //? Type de joueur, humain, ou ordinateur
            colorPlayed: null,  //? Couleur de pièces jouée
            hisTurn: false,     //? À son tour de jouer
            inCheck: false,     //? En état d'échec
            movedPlayed: 0,     //? Compteur du coup joué
            timePlayed: 0,      //? Compteur du temps passé à réfléchir (en seconde)
        },
        player2: {              //* Objet du joueur 2
            playerName: null,
            playerType: null,
            colorPlayed: null,
            hisTurn: false,
            inCheck: false,
            movedPlayed: 0,
            timePlayed: 0,
        },
    },  //! Sera rajouté ici pleins d'objets, un par coup avec {playerColor, killingMove, pieceID, origin, destination}. 

};