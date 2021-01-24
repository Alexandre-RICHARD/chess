const getMoves = {

    Allmoves: {
        blackMoves: {},
        whiteMoves: {},
    },

    fu: {
        y: (color, value, howmany) => {
            if (color === "black") {
                return value - howmany;
            }
            if (color === "white") {
                return value + howmany;
            }
        },
    },

    pawnMoves: (bData) => {
        const pieces = bData.filter(el => el.piece_name === "pawn");
        pieces.forEach(pi => {
            let color1 = null;
            let color2 = null;
            let startLine = null;
            let moveCounter = 1;
            if (pi.piece_color === "black") {
                color1 = "black";
                color2 = "white";
                startLine = 7;
            } else if (pi.piece_color === "white") {
                color1 = "white";
                color2 = "black";
                startLine = 2;
            }
            getMoves.Allmoves[`${color1}Moves`][pi.piece_id] = {};
            const casey1 = bData.find(el => el.x === pi.x && el.y === getMoves.fu.y(color1, pi.y, 1));
            const casey2 = bData.find(el => el.x === pi.x && el.y === getMoves.fu.y(color1, pi.y, 2));
            const casexy1 = bData.find(el => el.x === pi.x - 1 && el.y === getMoves.fu.y(color1, pi.y, 1));
            const casexy2 = bData.find(el => el.x === pi.x + 1 && el.y === getMoves.fu.y(color1, pi.y, 1));
            const casex1 = bData.find(el => el.x === pi.x - 1 && el.y === pi.y);
            const casex2 = bData.find(el => el.x === pi.x + 1 && el.y === pi.y);
            if (casey1.piece_name === null) {
                getMoves.Allmoves[`${color1}Moves`][`${pi.piece_id}`][moveCounter] = {
                    originCase: `${pi.x}${pi.y}`,
                    destinationCase: `${casey1.x}${casey1.y}`,
                    killingMove: false,
                }
                moveCounter++;
                if (casey2.piece_name === null && pi.y === startLine) {
                    getMoves.Allmoves[`${color1}Moves`][pi.piece_id][moveCounter] = {
                        originCase: `${pi.x}${pi.y}`,
                        destinationCase: `${casey2.x}${casey2.y}`,
                        killingMove: false,
                    }
                    moveCounter++;
                }
            }
            for (let i = 0; i < 2; i++) {
                if ([`casexy${i}`]) {
                    if ([`casexy${i}`].piece_color === `${color2}`) {
                        getMoves.Allmoves[`${color1}Moves`][pi.piece_id][moveCounter] = {
                            originCase: `${pi.x}${pi.y}`,
                            destinationCase: `${[`casexy${i}`].x}${[`casexy${i}`].y}`,
                            killingMove: true,
                        }
                        moveCounter++;
                    }
                }
            }
            for (let i = 0; i < 2; i++) {
                if ([`casex${i}`]) {
                    if ([`casex${i}`].piece_color === `${color2}` && [`casex${i}`].pawn_just_move_two === true) {
                        getMoves.Allmoves[`${color1}Moves`][pi.piece_id][moveCounter] = {
                            originCase: `${pi.x}${pi.y}`,
                            destinationCase: `${[`casex${i}`].x}${[`casex${i}`].y + getMoves.fu.y(color1, 0, 1)}`,
                            killingMove: true,
                        }
                        moveCounter++;
                    }
                }
            }
        });
    },

    rookMoves: (bData) => {
        const pieces = bData.filter(el => el.piece_name === "rook");
        pieces.forEach(pi => {

        });
    },

    knightMoves: (bData) => {
        const pieces = bData.filter(el => el.piece_name === "knight");
        pieces.forEach(pi => {

        });
    },

    bishopMoves: (bData) => {
        const pieces = bData.filter(el => el.piece_name === "bishop");
        pieces.forEach(pi => {

        });
    },

    queenMoves: (bData) => {
        const pieces = bData.filter(el => el.piece_name === "queen");
        pieces.forEach(pi => {

        });
    },

    kingMoves: (bData) => {
        const pieces = bData.filter(el => el.piece_name === "king");
        pieces.forEach(pi => {

        });
    },

    getAllMoves: (bData) => {
        getMoves.pawnMoves(bData);
        getMoves.rookMoves(bData);
        getMoves.knightMoves(bData);
        getMoves.bishopMoves(bData);
        getMoves.queenMoves(bData);
        getMoves.kingMoves(bData);
        return getMoves.Allmoves;
    }
}

module.exports = getMoves;