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

    board: {                        //* L'énorme objet de notre Board
        caseXY: {                   //! Un sous objet pour chaque case
            x: 1,                   //? Position de la case en X
            y: 8,                   //? Position de la case en Y
            caseColor: 'white',     //? Couleur de la case
            isPiece: true,          //? Y'a t-il une pièce dessus ?
            controlByWhite: false,  //? Les blancs peuvent-ils y accéder ?
            controlByBlack: false,  //? Les noirs peuvent-ils y accéder ?
            name: null,             //? Nom de la pièce (nom simple)
            id: null,               //? Id de la pièce, type 1er pion noir => p1b   (p,r,c,b,k,q)
            color: null,            //? Couleur de la pièce
            pawnJustMoveTwo: null,  //? Si le pion vient d'avancer de deux case pour la prise en passant
            rookArleadyMoved: null, //? Si la tour a déjà bougé pour le rock
        },
        case28: {
            x: 2,
            y: 8,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'knight',
            pieceId: 'c1b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case38: {
            x: 3,
            y: 8,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'bishop',
            pieceId: 'b1b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case48: {
            x: 4,
            y: 8,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'queen',
            pieceId: 'q1b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case58: {
            x: 5,
            y: 8,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'king',
            pieceId: 'k1b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'false',
        },
        case68: {
            x: 6,
            y: 8,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'bishop',
            pieceId: 'b2b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case78: {
            x: 7,
            y: 8,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'knight',
            pieceId: 'c2b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case88: {
            x: 8,
            y: 8,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'rook',
            pieceId: 'r2b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'false',
        },
        case17: {
            x: 1,
            y: 7,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p1b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case27: {
            x: 2,
            y: 7,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p2b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case37: {
            x: 3,
            y: 7,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p3b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case47: {
            x: 4,
            y: 7,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p4b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case57: {
            x: 5,
            y: 7,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p5b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case67: {
            x: 6,
            y: 7,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p6b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case77: {
            x: 7,
            y: 7,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p7b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case87: {
            x: 8,
            y: 7,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p8b',
            pieceColor: 'black',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case16: {
            x: 1,
            y: 6,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case26: {
            x: 2,
            y: 6,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case36: {
            x: 3,
            y: 6,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case46: {
            x: 4,
            y: 6,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case56: {
            x: 5,
            y: 6,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case66: {
            x: 6,
            y: 6,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case76: {
            x: 7,
            y: 6,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case86: {
            x: 8,
            y: 6,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case15: {
            x: 1,
            y: 5,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case25: {
            x: 2,
            y: 5,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case35: {
            x: 3,
            y: 5,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case45: {
            x: 4,
            y: 5,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case55: {
            x: 5,
            y: 5,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case65: {
            x: 6,
            y: 5,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case75: {
            x: 7,
            y: 5,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case85: {
            x: 8,
            y: 5,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case14: {
            x: 1,
            y: 4,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case24: {
            x: 2,
            y: 4,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case34: {
            x: 3,
            y: 4,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case44: {
            x: 4,
            y: 4,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case54: {
            x: 5,
            y: 4,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case64: {
            x: 6,
            y: 4,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case74: {
            x: 7,
            y: 4,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case84: {
            x: 8,
            y: 4,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case13: {
            x: 1,
            y: 3,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case23: {
            x: 2,
            y: 3,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case33: {
            x: 3,
            y: 3,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case43: {
            x: 4,
            y: 3,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case53: {
            x: 5,
            y: 3,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case63: {
            x: 6,
            y: 3,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case73: {
            x: 7,
            y: 3,
            caseColour: 'black',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case83: {
            x: 8,
            y: 3,
            caseColour: 'white',
            isPiece: false,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'null',
            pieceId: 'null',
            pieceColor: 'null',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case12: {
            x: 1,
            y: 2,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p1w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case22: {
            x: 2,
            y: 2,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p2w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case32: {
            x: 3,
            y: 2,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p3w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case42: {
            x: 4,
            y: 2,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p4w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case52: {
            x: 5,
            y: 2,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p5w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case62: {
            x: 6,
            y: 2,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p6w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case72: {
            x: 7,
            y: 2,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p7w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case82: {
            x: 8,
            y: 2,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'pawn',
            pieceId: 'p8w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'false',
            arleadyMoved: 'null',
        },
        case11: {
            x: 1,
            y: 1,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'rook',
            pieceId: 'r1w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'false',
        },
        case21: {
            x: 2,
            y: 1,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'knight',
            pieceId: 'c1w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case31: {
            x: 3,
            y: 1,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'bishop',
            pieceId: 'b1w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case41: {
            x: 4,
            y: 1,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'queen',
            pieceId: 'q1w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case51: {
            x: 5,
            y: 1,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'king',
            pieceId: 'k1w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'false',
        },
        case61: {
            x: 6,
            y: 1,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'bishop',
            pieceId: 'b2w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case71: {
            x: 7,
            y: 1,
            caseColour: 'black',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'knight',
            pieceId: 'c2w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'null',
        },
        case81: {
            x: 8,
            y: 1,
            caseColour: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            pieceName: 'rook',
            pieceId: 'r2w',
            pieceColor: 'white',
            pawnJustMoveTwo: 'null',
            arleadyMoved: 'false',
        },    
    }

};