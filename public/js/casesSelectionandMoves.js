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
        console.log(casesSelectionandMoves.moveDataObject);
    },

    select: (event) => {
        const selectedCase = event.target;
        console.log(selectedCase);
        selectedCase.classList.add('selectedCase');
        if (document.querySelector('.selectedCase')) {
            casesSelectionandMoves.getCasesWithPieces().forEach(element => {
                element.removeEventListener('click', casesSelectionandMoves.select, false);
            })
        }
        casesSelectionandMoves.showPossibleMove(casesSelectionandMoves);
        selectedCase.addEventListener('click', casesSelectionandMoves.deselect, false);
    },

    showPossibleMove: () => {

    },

    deselect: (event) => {
        const deselectedCase = event.target;
        deselectedCase.removeEventListener('click', casesSelectionandMoves.deselect, false);
        deselectedCase.classList.remove('selectedCase');
        casesSelectionandMoves.putEventOnCases();
    },

}