const app = {
    test: () => {
        const chessData = []
        for (let data = 1; data < 65; data++) {
            const dataTemp = document.querySelector(`#getData${data}`).getElementsByTagName("td")
            const object = {
                id: dataTemp[0].innerText,
                name: dataTemp[1].innerText,
                color: dataTemp[2].innerText,
                state: dataTemp[3].innerText,
                pos_x: dataTemp[4].innerText,
                pos_y: dataTemp[5].innerText,
                pawn_spec: dataTemp[6].innerText,
                image: dataTemp[7].innerText
            }
            chessData.push(object);
        }
        return chessData;
    },

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

    init: () => {
        app.test();
        app.initEventCase();
    }

}


document.addEventListener('DOMContentLoaded', app.init)