const casesSelectionandMoves = {

    initEventCase: () => {
        const cases = document.querySelectorAll('.case');
        cases.forEach(tempCase => {
            if (app.test()[tempCase.id - 1].name !== 'none') {
                tempCase.addEventListener('click', app.select);
            }
        })
        return cases;
    },

    select: (event) => {
        const selectedCase = event.target;
        console.log(selectedCase);
        selectedCase.classList.add('selectedCase');

        const cases = app.initEventCase();
        cases.forEach(tempCase => {
            tempCase.removeEventListener('click', app.select);
        })

        selectedCase.addEventListener('click', app.deselect);
    },

    deselect: (event) => {
        const deselectedCase = event.target;
        deselectedCase.classList.remove('selectedCase');
        app.initEventCase();
    },

}