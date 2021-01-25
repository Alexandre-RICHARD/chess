const getMoves = {

    Allmoves: {
        blackMoves: {},
        whiteMoves: {},
    },

    fu: {
        y: (color, value, howmany) => {
            return (color === "black" ? value - howmany : value + howmany);
        },
        xy: (value, howmany) => {
            return value + howmany;
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
            const cases = []
            cases.push(bData.find(el => el.x === pi.x && el.y === getMoves.fu.y(color1, pi.y, 1)));
            cases.push(bData.find(el => el.x === pi.x && el.y === getMoves.fu.y(color1, pi.y, 2)));
            cases.push(bData.find(el => el.x === pi.x - 1 && el.y === getMoves.fu.y(color1, pi.y, 1)));
            cases.push(bData.find(el => el.x === pi.x + 1 && el.y === getMoves.fu.y(color1, pi.y, 1)));
            cases.push(bData.find(el => el.x === pi.x - 1 && el.y === pi.y));
            cases.push(bData.find(el => el.x === pi.x + 1 && el.y === pi.y));
            if (cases[0]) {
                if (cases[0].piece_name === null) {
                    getMoves.Allmoves[`${color1}Moves`][`${pi.piece_id}`][moveCounter] = {
                        originCase: `${pi.x}${pi.y}`,
                        destinationCase: `${cases[0].x}${cases[0].y}`,
                        killingMove: false,
                    }
                    moveCounter++;
                    if (cases[1]) {
                        if (cases[1].piece_name === null && pi.y === startLine) {
                            getMoves.Allmoves[`${color1}Moves`][pi.piece_id][moveCounter] = {
                                originCase: `${pi.x}${pi.y}`,
                                destinationCase: `${cases[1].x}${cases[1].y}`,
                                killingMove: false,
                            }
                            moveCounter++;
                        }
                    }
                }
            }
            for (let i = 2; i < 4; i++) {
                if (cases[i]) {
                    if (cases[i].piece_color === `${color2}`) {
                        getMoves.Allmoves[`${color1}Moves`][pi.piece_id][moveCounter] = {
                            originCase: `${pi.x}${pi.y}`,
                            destinationCase: `${cases[i].x}${cases[i].y}`,
                            killingMove: true,
                        }
                        moveCounter++;
                    }
                }
            }
            for (let i = 4; i < 6; i++) {
                if (cases[i]) {
                    if (cases[i].piece_color === `${color2}` && cases[i].pawn_just_move_two === true) {
                        getMoves.Allmoves[`${color1}Moves`][pi.piece_id][moveCounter] = {
                            originCase: `${pi.x}${pi.y}`,
                            destinationCase: `${cases[i].x}${cases[i].y + getMoves.fu.y(color1, 0, 1)}`,
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
            let color1 = null;
            let color2 = null;
            let moveCounter = 1;
            if (pi.piece_color === "black") {
                color1 = "black";
                color2 = "white";
            } else if (pi.piece_color === "white") {
                color1 = "white";
                color2 = "black";
            }
            getMoves.Allmoves[`${color1}Moves`][pi.piece_id] = {};
            for (let direction = 0; direction < 2; direction++) {
                for (let sens = -1; sens < 2; sens += 2) {
                    let stop = 0;
                    let search = 0;
                    while (stop !== 1) {
                        search++;
                        const caseS = bData.find(el => el.x === (direction === 0 ? pi.x + sens * search : pi.x) && el.y === (direction === 1 ? pi.y + sens * search : pi.y));
                        if (caseS) {
                            if (caseS.piece_color === null) {
                                getMoves.Allmoves[`${color1}Moves`][pi.piece_id][moveCounter] = {
                                    originCase: `${pi.x}${pi.y}`,
                                    destinationCase: `${caseS.x}${caseS.y}`,
                                    killingMove: false,
                                }
                                moveCounter++;
                            }
                            if (caseS.piece_color === color2) {
                                getMoves.Allmoves[`${color1}Moves`][pi.piece_id][moveCounter] = {
                                    originCase: `${pi.x}${pi.y}`,
                                    destinationCase: `${caseS.x}${caseS.y}`,
                                    killingMove: true,
                                }
                                moveCounter++;
                                stop = 1;
                            }
                            if (caseS.piece_color === color1) {
                                stop = 1;
                            }
                        } else {
                            stop = 1;
                        }
                    }
                }
            }
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
            let color1 = null;
            let color2 = null;
            let moveCounter = 1;
            if (pi.piece_color === "black") {
                color1 = "black";
                color2 = "white";
            } else if (pi.piece_color === "white") {
                color1 = "white";
                color2 = "black";
            }
            getMoves.Allmoves[`${color1}Moves`][pi.piece_id] = {};
            for (let xDirection = -1; xDirection < 2; xDirection+= 2) {
                for (let yDirection = -1; yDirection < 2; yDirection += 2) {
                    let stop = 0;
                    let search = 0;
                    while (stop !== 1) {
                        search++;
                        const caseS = bData.find(el => el.x === (xDirection === -1 ? pi.x + -1 * search : pi.x + 1 * search) && el.y === (yDirection === -1 ? pi.y + -1 * search : pi.y + 1 * search));
                        if (caseS) {
                            if (caseS.piece_color === null) {
                                getMoves.Allmoves[`${color1}Moves`][pi.piece_id][moveCounter] = {
                                    originCase: `${pi.x}${pi.y}`,
                                    destinationCase: `${caseS.x}${caseS.y}`,
                                    killingMove: false,
                                }
                                moveCounter++;
                            }
                            if (caseS.piece_color === color2) {
                                getMoves.Allmoves[`${color1}Moves`][pi.piece_id][moveCounter] = {
                                    originCase: `${pi.x}${pi.y}`,
                                    destinationCase: `${caseS.x}${caseS.y}`,
                                    killingMove: true,
                                }
                                moveCounter++;
                                stop = 1;
                            }
                            if (caseS.piece_color === color1) {
                                stop = 1;
                            }
                        } else {
                            stop = 1;
                        }
                    }
                }
            }
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