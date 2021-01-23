const getLegitMoves = {

    Allmoves: {},

    pawnMoves: (boardData) => {
        const casesToAdd = {};
        const pieces = boardData.filter(element => element.piece_name === "pawn");
        pieces.forEach(piece => {
            if (piece.piece_color === "black" && piece.y === 7) {
                const case1 = boardData.find(element => element.y === piece.y - 1 && element.x === piece.x)
                if (case1.piece_name === null) {
                    // casesToAdd.`${}`
                    if (true) {

                    }
                }
            } else {
                if (true) {

                }
            }
            if (piece.piece_color === "white" && piece.y === 2) {
                if (true) {
                    if (true) {

                    }
                }
            } else {
                if (true) {

                }
            }
        });
        getLegitMoves.Allmoves.pawn = {};
    },

    rookMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "rook");
        pieces.forEach(piece => {

        });
        getLegitMoves.Allmoves.rook = {};
    },

    knightMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "knight");
        pieces.forEach(piece => {

        });
        getLegitMoves.Allmoves.knight = {};
    },

    bishopMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "bishop");
        pieces.forEach(piece => {

        });
        getLegitMoves.Allmoves.bishop = {};
    },

    queenMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "queen");
        pieces.forEach(piece => {

        });
        getLegitMoves.Allmoves.queen = {};
    },

    kingMoves: (boardData) => {
        const pieces = boardData.filter(element => element.piece_name === "king");
        pieces.forEach(piece => {

        });
        getLegitMoves.Allmoves.king = {};
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