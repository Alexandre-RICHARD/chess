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

    board: {                                //* L'énorme objet de notre Board
        caseXY: {                           //! Un sous objet pour une case
            x: 1,                           //? Position de la case en X
            y: 8,                           //? Position de la case en Y
            caseColor: 'white',             //? Couleur de la case
            isPiece: true,                  //? Y'a t-il une pièce dessus ?
            controlByWhite: false,          //? Les blancs peuvent-ils y accéder ?
            controlByBlack: false,          //? Les noirs peuvent-ils y accéder ?
            piece: {                        //* Le sous-sous objet de notre pièce (tout est null si pas de pièce)
                name: null,                 //? Nom de la pièce (nom simple)
                id: null,                   //? Id de la pièce, type 1er pion noir => p1b   (p,r,c,b,k,q)
                color: null,                //? Couleur de la pièce
                isAlive: null,              //? La case est-elle toujours en jeu ?
                inDangerZone: null,         //? La pièce est-elle menacée ?
                special_properties: {       //* Sous-sous-sous objet pour les propriétés spéciales
                    pawnJustMoveTwo: null,  //? Si le pion vient d'avancer de deux case pour la prise en passant
                    rookArleadyMoved: null, //? Si la tour a déjà bougé pour le rock
                    kingAlreadyMoved: null, //? Si le roi a déjà bougé pour le rock
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
        caseXY: {
            x: 1,
            y: 8,
            caseColor: 'white',
            isPiece: true,
            controlByWhite: false,
            controlByBlack: false,
            piece: {
                name: null,
                id: null,
                color: null,
                isAlive: null,
                inDangerZone: null,
                special_properties: {
                    pawnJustMoveTwo: null,
                    rookArleadyMoved: null,
                    kingAlreadyMoved: null,
                },
            }
        },
    }

    };

    const possibleMoves = {


}