const getLegitMoves = {

    Allmoves: {
        blackPiecesMoves: {},
        whitePiecesMoves: {},
    },

    pawnMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "pawn");
        pieces.forEach(piece => {
            if (piece.piece_color === "black") {
                getLegitMoves.Allmoves.blackPiecesMoves[`${piece.piece_id}`] = {}
                let moveCounter = 1;
                if (piece.y === 7) {
                    const casey1 = boardData.find(element => element.x === piece.x && element.y === piece.y - 1)
                    if (casey1.piece_name === null) {
                        getLegitMoves.Allmoves.blackPiecesMoves[`${piece.piece_id}`][moveCounter] = {
                            originCase: `${piece.x}${piece.y}`,
                            destinationCase: `${casey1.x}${casey1.y}`,
                            killingMove: false,
                        }
                        moveCounter++;
                        const casey2 = boardData.find(element => element.x === piece.x && element.y === piece.y - 2)
                        if (casey2.piece_name === null) {
                            getLegitMoves.Allmoves.blackPiecesMoves[`${piece.piece_id}`][moveCounter] = {
                                originCase: `${piece.x}${piece.y}`,
                                destinationCase: `${casey2.x}${casey2.y}`,
                                killingMove: false,
                            }
                            moveCounter++;
                        }
                    }
                } else {
                    const casey3 = boardData.find(element => element.x === piece.x && element.y === piece.y - 1)
                    if (casey3.piece_name === null) {
                        getLegitMoves.Allmoves.blackPiecesMoves[`${piece.piece_id}`][moveCounter] = {
                            originCase: `${piece.x}${piece.y}`,
                            destinationCase: `${casey3.x}${casey3.y}`,
                            killingMove: false,
                        }
                    }
                }
                const casexy1 = boardData.find(element => element.x === piece.x - 1 && element.y === piece.y - 1)
                if (casexy1.piece_color === "white") {
                    getLegitMoves.Allmoves.blackPiecesMoves[`${piece.piece_id}`][moveCounter] = {
                        originCase: `${piece.x}${piece.y}`,
                        destinationCase: `${casexy1.x}${casexy1.y}`,
                        killingMove: true,
                    }
                }
                const casexy2 = boardData.find(element => element.x === piece.x + 1 && element.y === piece.y - 1)
                if (casexy2.piece_color === "white") {
                    getLegitMoves.Allmoves.blackPiecesMoves[`${piece.piece_id}`][moveCounter] = {
                        originCase: `${piece.x}${piece.y}`,
                        destinationCase: `${casexy2.x}${casexy2.y}`,
                        killingMove: true,
                    }
                }
                const casex1 = boardData.find(element => element.x === piece.x - 1 && element.y === piece.y)
                if (casex1.piece_color === "white" && casex1.pawn_just_move_two === true) {
                    getLegitMoves.Allmoves.blackPiecesMoves[`${piece.piece_id}`][moveCounter] = {
                        originCase: `${piece.x}${piece.y}`,
                        destinationCase: `${casex1.x}${casex1.y - 1}`,
                        killingMove: true,
                    }
                }
                const casex2 = boardData.find(element => element.x === piece.x + 1 && element.y === piece.y)
                if (casex2.piece_color === "white" && casex2.pawn_just_move_two === true) {
                    getLegitMoves.Allmoves.blackPiecesMoves[`${piece.piece_id}`][moveCounter] = {
                        originCase: `${piece.x}${piece.y}`,
                        destinationCase: `${casex2.x}${casex2.y - 1}`,
                        killingMove: true,
                    }
                }
            }
        });
    },

    rookMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "rook");
        pieces.forEach(piece => {

        });
    },

    knightMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "knight");
        pieces.forEach(piece => {

        });
    },

    bishopMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "bishop");
        pieces.forEach(piece => {

        });
    },

    queenMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "queen");
        pieces.forEach(piece => {

        });
    },

    kingMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "king");
        pieces.forEach(piece => {

        });
    },

    getAllMoves: (boardData) => {
        getLegitMoves.pawnMoves(boardData);
        getLegitMoves.rookMoves(boardData);
        getLegitMoves.knightMoves(boardData);
        getLegitMoves.bishopMoves(boardData);
        getLegitMoves.queenMoves(boardData);
        getLegitMoves.kingMoves(boardData);
        return getLegitMoves.Allmoves;
    }
}

module.exports = getLegitMoves;