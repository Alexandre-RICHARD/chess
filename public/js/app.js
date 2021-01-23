// Voici notre fichier JS front qui agit comme un point central de notre application. Il ne fait rien de lui-même.
const app = {

    // Nos variables qu'on veut globales
    base_URL: "http://localhost:3000", //? Notre url pour fetch

    // Notre initialisation : créer l'échiquier et la table
    init: () => {
        createBoardandTable.drawBoardandTable();
        setTimeout(() => {
            casesSelectionandMoves.putEventOnCases();
        }, 80 * createBoardandTable.interval);
        casesSelectionandMoves.getMoveData();
        document.querySelector('#testing-reset-button').addEventListener('click', app.resetData);
        app.reset = 1;
    },
    // window.location.reload()
    
    async resetData() {
        document.querySelector('#testing-reset-button').removeEventListener('click', app.resetData);
        try {
            await fetch(app.base_URL + '/game/reset');
        } catch (error) {
            console.trace(error);
        }

    },

}

document.addEventListener('DOMContentLoaded', app.init);