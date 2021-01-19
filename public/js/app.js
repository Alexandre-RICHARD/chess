const app = {

    base_URL: "http://localhost:3000",

    init: () => {
        app.drawBoard();
    },

    async getBoardData() {
        try {
            let data = await fetch(app.base_URL + '/board/data');
            let boardData = await data.json();
            console.log(boardData);
            app.drawCases(boardData);
        } catch (error) {
            console.trace(error);
        }
    },

    board: document.querySelector('.board'),

    drawBoard: () => {
        app.drawLettersRow(0);
        app.getBoardData();
    },

    drawLettersRow: (position) => {
        const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
        const corner1 = document.createElement('div');
        corner1.classList.add('corner');
        app.board.appendChild(corner1);
        for (let i = 0; i < 8; i++) {
            const letter = document.createElement('div');
            letter.classList.add('letter');
            letter.textContent = letters[i];
            if (position === 0) {
                letter.style.borderBottom = "2px solid #0F0909";
            } else {
                letter.style.borderTop = "2px solid #0F0909";
            }
            app.board.appendChild(letter);
        }
        const corner2 = corner1.cloneNode(true);
        app.board.appendChild(corner2);
    },

    drawCases: (boardData) => {
        let x = 0;
        let z = 1;
        for (let i = 1; i < 9; i++) {
            let y = x + 8;
            const number1 = document.createElement('div');
            number1.classList.add('number');
            number1.textContent = i;
            const number2 = number1.cloneNode(true);
            number1.style.borderRight = "2px solid #0F0909"
            app.board.appendChild(number1);

            for (x; x < y; x++) {
                const boardCase = document.createElement('div');

                if (z%2 === 0) {
                    boardCase.classList.add('case', 'case--white')
                } else {
                    boardCase.classList.add('case', 'case--black')
                }
                z++;

                boardCase.classList.add(`pieceColor--${boardData[x].color}`)
                console.log(boardData[x].name.split('_')[0])
                if (boardData[x].name.split('_')[0] !== "none") {
                    const image = document.createElement('img');
                    image.src = `/images/${boardData[x].name.split('_')[0]}.svg`;
                    image.classList.add(`${boardData[x].name.split('_')[0]}`);
                    boardCase.appendChild(image);
                }

                boardCase.setAttribute("piece", boardData[x].name);
                app.board.appendChild(boardCase);
            }
            z++;

            number2.style.borderLeft = "2px solid #0F0909"
            app.board.appendChild(number2);
        }

        app.drawLettersRow(1);
    },

    // initEventCase: () => {
    //     const cases = document.querySelectorAll('.case');
    //     cases.forEach(tempCase => {
    //         if (app.test()[tempCase.id - 1].name !== 'none') {
    //             tempCase.addEventListener('click', app.select);
    //         }
    //     })
    //     return cases;
    // },

    // select: (event) => {
    //     const selectedCase = event.target;
    //     console.log(selectedCase);
    //     selectedCase.classList.add('selectedCase');

    //     const cases = app.initEventCase();
    //     cases.forEach(tempCase => {
    //         tempCase.removeEventListener('click', app.select);
    //     })

    //     selectedCase.addEventListener('click', app.deselect);
    // },

    // deselect: (event) => {
    //     const deselectedCase = event.target;
    //     deselectedCase.classList.remove('selectedCase');
    //     app.initEventCase();
    // },

}


document.addEventListener('DOMContentLoaded', app.init);