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
        <div id="letterC0" class="letterContainer"></div>
        <div id="numberC0" class="numberContainer"></div>
        <div id="casesC" class="casesContainer"></div>
        <div id="numberC1" class="numberContainer"></div>
        <div id="letterC1" class="letterContainer"></div>
        `;
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

    // Création de la première et dernière ligne contenant les lettres. Appelée au tout début dans drawBoardandTable et à la fin du drawCases
    drawLettersRow: (position) => {
        const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
        // Il faut d'abord créer les coins
        const corner1 = document.createElement('div');
        corner1.classList.add('corner');
        document.querySelector(`#letterC${position}`).appendChild(corner1);
        // Boucle des 8 lettres
        for (let i = 0; i < 8; i++) {
            const letter = document.createElement('div');
            letter.classList.add('letter');
            letter.textContent = letters[i];
            // Si le paramètre donnée à l'appel des fonctions est de 0, c'est donc la première ligne du board, donc bordure en dessous, sinon dernière ligne et bordure au dessus
            if (position === 0) {
                letter.style.borderBottom = "2px solid";
            } else {
                letter.style.borderTop = "2px solid";
            }
            document.querySelector(`#letterC${position}`).appendChild(letter);
        }
        // Notre deuxième coin qui clone le premier
        const corner2 = corner1.cloneNode(true);
        document.querySelector(`#letterC${position}`).appendChild(corner2);
    },

    drawCases: (boardData) => {
        // X va être utilisé comme base pour y et pour la boucle for des lignes. Initialisée à zéro, elle commencera chaque boucle for avec +8
        let x = 0;
        // Z est utilisée pour la couleur des cases de l'échiquier. En effet, la première case d'une ligne est de la même couleur que la dernière case de la précédente. Donc, z s'incrémente à chaque case dans la boucle for des cases et prend +1 après cette boucle.
        let z = 1;
        // De 1 à 8, création de chaque ligne avec d'abord une div pour les nombres (cloné déjà pour le 2ème à cause des bordure.)
        for (let i = 1; i < 9; i++) {
            // Y prend la valeur Y = x + 8 pour qu'il suive la même "incrémentation"
            let y = x + 8;
            const number1 = document.createElement('div');
            number1.classList.add('number');
            number1.textContent = 9 - i;
            const number2 = number1.cloneNode(true);
            number1.style.borderRight = "2px solid"


                document.querySelector('#numberC0').appendChild(number1);


            // Boucle for des 8 cases pour une ligne
            for (x; x < y; x++) {

                const boardCase = document.createElement('div');
                // On utilise le Z ici, s'il est pair, alors case blanche, sinon elle est noire
                if (z % 2 === 0) {
                    boardCase.classList.add('case', 'case--white')
                } else {
                    boardCase.classList.add('case', 'case--black')
                }
                z++;
                // Partie très désagréable à lire, mais en gros, si dans les data, cette case porte une pièce, on lui rajoute les bonnes classes (couleur et noms de la pièce), on créé un clone de SVG (template déjà dans le HTML) et un attribut portant le nom complet de la pièce (nom + id)
                if (boardData[x].name.split('_')[0] !== "none") {
                    boardCase.classList.add(`pieceColor--${boardData[x].color}`, `${boardData[x].name.split('_')[0]}`);
                    const clone = document.importNode(document.querySelector(`#${boardData[x].name.split('_')[0]}`).content, true);
                    clone.querySelector('svg').classList.add(`${boardData[x].name.split('_')[0]}`);
                    boardCase.appendChild(clone);
                }
                boardCase.setAttribute("piece", boardData[x].name);


                    document.querySelector('#casesC').appendChild(boardCase); //!!!!!!!!
            }
            // L'incrément de Z "bonus" pour faire +9 à chaque ligne
            z++;
            // La dernière partie de la deuxième nombre
            number2.style.borderLeft = "2px solid"


                document.querySelector('#numberC1').appendChild(number2); //!!!!!!!!


        }
        // On appelle après que nos 1 + 8 lignes aient été créées de nouveau la fonction drawLetters pour faire la 10ème ligne avec cette fois le paramètre 1 qui servira à mettre les bordur-top
        app.drawLettersRow(1);
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