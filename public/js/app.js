// Voici notre fichier JS front qui agit comme un point central de notre application. Il ne fait rien de lui-même.
const app = {

    // Nos variables qu'on veut globales
    base_URL: "http://localhost:3000", //? Notre url pour fetch

    // Notre initialisation : créer l'échiquier et la table
    init: () => {

        createBoardandTable.getBoardData().then((boardData) => {
            console.log(boardData);
            if (boardData === "L'objet boardData est vide") {
                console.log('Reset nécessaire')
            } else {
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
                createBoardandTable.drawLetters();
                createBoardandTable.drawNumbers();
                createBoardandTable.drawCases(boardData);
                createBoardandTable.table.innerHTML = '';
                createBoardandTable.fillTable(boardData);
                casesSelectionandMoves.getMoveData();
                setTimeout(() => {
                    casesSelectionandMoves.putEventOnCases();
                }, 80 * createBoardandTable.interval);
            }
        })
        document.querySelector('#testing-reset-button').addEventListener('click', app.resetData);
    },
    
    async resetData() {
        try {
            await fetch(app.base_URL + '/game/reset');
            document.location.reload()
        } catch (error) {
            console.trace(error);
        }

    },

}

document.addEventListener('DOMContentLoaded', app.init);