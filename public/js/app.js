const app = {

    // Nos variables qu'on veut globales
    base_URL: "http://localhost:3000",
    interval: 5,
    table: document.querySelector('.game_summary'),

    // Notre initialisation du tableau, du gameBoard
    init: () => {
        app.drawBoardandTable();
    },

    // Fonction conçue pour créer initialement le board et la table mais aussi pour la regénérer à souhait
    drawBoardandTable: () => {
        document.querySelector('.board').innerHTML = `
        <div class="corner"></div>
        <div id="letterC0" class="letterContainer"></div>
        <div class="corner"></div>
        <div id="numberC0" class="numberContainer"></div>
        <div id="casesC" class="casesContainer"></div>
        <div id="numberC1" class="numberContainer"></div>
        <div class="corner"></div>
        <div id="letterC1" class="letterContainer"></div>
        <div class="corner"></div>
        `;
        app.drawLetters();
        app.drawNumbers();
        app.getBoardData().then(app.drawCases);
        app.table.innerHTML = '';
        app.getBoardData().then(app.fillTable);
    },

    // Récupération des données
    async getBoardData() {
        try {
            let data = await fetch(app.base_URL + '/board/data');
            let boardData = await data.json();
            return boardData;
        } catch (error) {
            console.trace(error);
        }
    },

    drawLetters: () => {
        for (let x = 0; x < 2; x++) {
            const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
            for (let y = 0; y < 8; y++) {
                const letter = document.createElement('div');
                letter.classList.add('letter');
                letter.textContent = letters[y];
                if (x === 0) {
                    letter.style.borderBottom = "2px solid";
                } else {
                    letter.style.borderTop = "2px solid";
                }
                setTimeout(() => {
                    document.querySelector(`#letterC${x}`).appendChild(letter);
                }, (x * 8 + y) * (100/16) * app.interval);
            }
        }
    },

    drawNumbers: () => {
        for (let x = 0; x < 2; x++) {
            for (let y = 0; y < 8; y++) {
                const number = document.createElement('div');
                number.classList.add('number');
                number.textContent = 8 - y;
                if (x === 0) {
                    number.style.borderRight = "2px solid"
                } else {
                    number.style.borderLeft = "2px solid"
                }
                setTimeout(() => {
                    document.querySelector(`#numberC${x}`).appendChild(number);
                }, (x * 8 + y) * (100/16) * app.interval);
            }
        }
    },

    drawCases: (boardData) => {
        let z = 1;
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                const boardCase = document.createElement('div');
                if (z % 2 === 0) {
                    boardCase.classList.add('case', 'case--white')
                } else {
                    boardCase.classList.add('case', 'case--black')
                }
                if (boardData[x * 8 + y].name.split('_')[0] !== "none") {
                    boardCase.classList.add(`pieceColor--${boardData[x*8+y].color}`, `${boardData[x*8+y].name.split('_')[0]}`);
                    const clone = document.importNode(document.querySelector(`#${boardData[x*8+y].name.split('_')[0]}`).content, true);
                    clone.querySelector('svg').classList.add(`${boardData[x*8+y].name.split('_')[0]}`);
                    boardCase.appendChild(clone);
                    boardCase.setAttribute("piece", boardData[x * 8 + y].name);
                }
                setTimeout(() => {
                    document.querySelector('#casesC').appendChild(boardCase);
                }, (x * 8 + y) * (100/64) * app.interval);
                z++;
            }
            z++;
        }
    },

    // Création de notre tableau de valeur, assez basique
    fillTable: (boardData) => {
        const table = document.querySelector('.game_summary');
        // Création et remplissage du thead à l'aide de for in qui récupère le nom des propriétés
        const thead = document.createElement('thead');
        const tr1 = document.createElement('tr')
        for (const property in boardData[0]) {
            const prop = document.createElement('th');
            prop.textContent = property;
            tr1.appendChild(prop);
        }
        thead.appendChild(tr1);
        table.appendChild(thead);

        // Création du body qui utilise un for each pour récupérer chaque "ligne" de la base de donnée puis un for in element[...] pour avoir la valeur de chaque clé
        const tbody = document.createElement('thead');
        boardData.forEach(element => {
            const tr2 = document.createElement('tr')
            for (const key in element) {
                const td = document.createElement('td');
                td.textContent = element[key];
                tr2.appendChild(td);
            }
            tbody.appendChild(tr2);
        })
        table.appendChild(tbody);
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

}


document.addEventListener('DOMContentLoaded', app.init);