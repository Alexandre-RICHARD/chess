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

        //! Temporaire
        console.table(casesSelectionandMoves.moveDataObject);
        // const id = selectedCase.getAttribute("piece_id");
        // console.table(casesSelectionandMoves.moveDataObject.blackMoves[`${id}`])
        // console.table(casesSelectionandMoves.moveDataObject.whiteMoves[`${id}`])
    },

    showPossibleMove: (selectedCase) => {
        const piece_id = selectedCase.getAttribute("piece_id");
        const move = casesSelectionandMoves.moveDataObject[`${(piece_id.charAt(2) === "b" ? "black" : "white")}Moves`][piece_id];
        if (move) {
            for (let [key, value] of Object.entries(move)) {
                const oneMove = document.querySelector(`[id="${value.destinationCase}"]`);
                oneMove.classList.add('possibleMove');
                oneMove.setAttribute("piece_id", piece_id);
                oneMove.setAttribute("origin_case", value.originCase);
                oneMove.setAttribute("destination_case", value.destinationCase);
                oneMove.setAttribute("killingMove", value.killingMove);
                oneMove.addEventListener('click', casesSelectionandMoves.uploadMove, false)
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
                element.removeAttribute("origin_case");
                element.removeAttribute("destination_case");
                element.removeAttribute("killingMove");
            })
        }
        casesSelectionandMoves.putEventOnCases();
    },

    async uploadMove(event) {
        const move = new FormData
        move.append('piece_id', event.target.getAttribute("piece_id"));
        move.append('originCase', event.target.getAttribute("origin_case"));
        move.append('destinationCase', event.target.getAttribute("destination_case"));
        move.append('killingMove', event.target.getAttribute("killingMove"));
        try {
            const response = await fetch(app.base_URL + '/move/try', {
                method: "POST",
                body: move
            });
            if (response.ok) {
                console.log('Déplacement approuvé');
                app.init();
            } else {
                console.log('Ca a couillé quelque part');
            }
        } catch (error) {
            console.trace(error);
        }
    }

}