const getLegitMoves = {

    Allmoves: {},

    pawnMoves: (boardData) => {
        getLegitMoves.Allmoves.pawn = {p: 1};
    },

    rookMoves: (boardData) => {
        getLegitMoves.Allmoves.rook = {p: 2};
    },

    knightMoves: (boardData) => {
        getLegitMoves.Allmoves.knight = {p: 3};
    },

    bishopMoves: (boardData) => {
        getLegitMoves.Allmoves.bishop = {p: 4};
    },

    queenMoves: (boardData) => {
        getLegitMoves.Allmoves.queen = {p: 5};
    },

    kingMoves: (boardData) => {
        getLegitMoves.Allmoves.king = {p: 6};
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