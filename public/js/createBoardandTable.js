const createBoardandTable = {

    table: document.querySelector('.game_summary'), //? Pour stocker l'emplacement de notre table
    interval: 6, //? L'intervalle utilisé pour tous les setTimeout

    // Récupération des données en AJAX avec fetch
    async getBoardData() {
        try {
            let data = await fetch(app.base_URL + '/board/data');
            let boardData = await data.json();
            return boardData;
        } catch (error) {
            console.trace(error);
        }
    },

    // Pour créer nos deux lignes de lettres

    drawLetters: () => {
        const lettersStock = ["A", "B", "C", "D", "E", "F", "G", "H"] //? Le tableau qui nous servira de base pour la création des lettres
        for (let x = 0; x < 2; x++) {
            for (let y = 0; y < 8; y++) {
                const letter = document.createElement('div');
                letter.classList.add('letter');
                letter.textContent = lettersStock[y];
                if (x === 0) {
                    letter.style.borderBottom = "2px solid"
                } else {
                    letter.style.borderTop = "2px solid"
                }
                // setTimeout(() => {
                document.querySelector(`#letterC${x}`).appendChild(letter);
                // }, (x * 70 + y) * createBoardandTable.interval);
            }
        }
    },

    // Pour créer nos deux colonnes de nombres
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
                // setTimeout(() => {
                document.querySelector(`#numberC${x}`).appendChild(number);
                // }, (y * 10 + 1 + 8 * x) * createBoardandTable.interval);
            }
        }
    },

    // Pour créer nos 64 cases, fonction plutôt bien conçue à mon goût
    drawCases: (boardData) => {
        let z = 0; //? Variable Z utilisée pour la couleur des cases, elle sera incrémenté de 9 par cycle pour que la dernière case d'une ligne soit de la même couleur que la première d ela ligne suivante
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                const ourCase = boardData[x * 8 + y];
                const boardCase = document.createElement('div');
                if (z % 2 === 0) { //? On utilise donc Z en vérifiant sa propriété à être pair
                    boardCase.classList.add('case', 'case--w')
                } else {
                    boardCase.classList.add('case', 'case--b')
                }
                z++; //? Incrémentation de 1 * 8 par ligne de Z
                boardCase.id = `${ourCase.x}${ourCase.y}`
                // Cette partie est un peu imbitable, donc en gros, si l'objet de boardData avec l'index X comporte une pièce, donc avec un nom différent de none, alors, on lui ajoute deux classes (couleur de la pièce, type de pièce), on lui clone et appendChild le SVG correspondant à son type et on lui donne un attribut avec le nom de la pièce et un "faux id".
                if (ourCase.piece_name !== null) {
                    boardCase.classList.add(`pC--${ourCase.piece_color}`, `${ourCase.piece_name}`);
                    const clone = document.importNode(document.querySelector(`#${ourCase.piece_name}`).content, true);
                    boardCase.appendChild(clone);
                    boardCase.setAttribute("piece_id", ourCase.piece_id);
                }
                // setTimeout(() => {
                document.querySelector('#casesC').appendChild(boardCase);
                // }, (x * 10 + y) * createBoardandTable.interval);
            }
            z++; //? 9ème incrémentation de Z à la fin d'une ligne
        }
    },

    // Création de notre tableau de valeur, assez basique
    fillTable: (boardData) => {
        // Création et remplissage du thead à l'aide de for in qui récupère le nom des propriétés
        const thead = document.createElement('thead');
        const tr1 = document.createElement('tr')
        for (const property in boardData[0]) {
            const prop = document.createElement('th');
            prop.textContent = property;
            tr1.appendChild(prop);
        }
        thead.appendChild(tr1);
        createBoardandTable.table.appendChild(thead);
        // Création du body qui utilise un for each pour récupérer chaque "ligne" de la base de donnée puis un for in element[...] pour avoir la valeur de chaque clé
        const tbody = document.createElement('thead');
        boardData.forEach(element => {
            const tr2 = document.createElement('tr')
            for (const key in element) {
                const td = document.createElement('td');
                if (element[key] !== null) {
                    td.textContent = element[key];
                } else {
                    td.classList.add('emptyTD');
                }
                tr2.appendChild(td);
            }
            tbody.appendChild(tr2);
        })
        createBoardandTable.table.appendChild(tbody);
    },

}