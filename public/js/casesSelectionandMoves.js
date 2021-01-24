const casesSelectionandMoves = {

    moveDataObject: {},

    async getMoveData() {
        try {
            let data = await fetch(app.base_URL + '/move/data');
            let moveData = await data.json();
            casesSelectionandMoves.moveDataObject = moveData;
        } catch (error) {
            console.trace(error);
        }
    },

    getCasesWithPieces: () => {
        const cases = document.querySelectorAll("#casesC [piece_id]");
        return cases;
    },

    putEventOnCases: () => {
        casesSelectionandMoves.getCasesWithPieces().forEach(element => {
            element.addEventListener('click', casesSelectionandMoves.select, false);
        })
    },

    select: (event) => {
        const selectedCase = event.target;
        selectedCase.classList.add('selectedCase');
        casesSelectionandMoves.getCasesWithPieces().forEach(element => {
            element.removeEventListener('click', casesSelectionandMoves.select, false);
        })
        casesSelectionandMoves.showPossibleMove(selectedCase);
        selectedCase.addEventListener('click', casesSelectionandMoves.deselect, false);
    },

    showPossibleMove: (selectedCase) => {
        const color_id = selectedCase.getAttribute("piece_id");
        const move = casesSelectionandMoves.moveDataObject[`${(color_id.charAt(2) === "b" ? "black" : "white")}Moves`][color_id];
        if (move) {
            for (let [key, value] of Object.entries(move)) {
                const oneMove = document.querySelector(`[id="${value.destinationCase}"]`);
                oneMove.classList.add('possibleMove');
                oneMove.addEventListener('click', casesSelectionandMoves.move, false)
            }
        }
    },

    deselect: (event) => {
        const deselectedCase = event.target;
        deselectedCase.removeEventListener('click', casesSelectionandMoves.deselect, false);
        deselectedCase.classList.remove('selectedCase');
        const showMove = document.querySelectorAll('.possibleMove');
        if (showMove) {
            showMove.forEach(element => {
                element.classList.remove('possibleMove');
            })
        }
        casesSelectionandMoves.putEventOnCases();
    },

    move: () => {
        console.log('Bientôt, je bougerai pour de vrai');
    },

}