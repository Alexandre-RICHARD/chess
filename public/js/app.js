// Voici notre fichier JS front qui agit comme un point central de notre application. Il ne fait rien de lui-même.
const app = {

    // Nos variables qu'on veut globales
    base_URL: "http://localhost:3000", //? Notre url pour fetch

    // Notre initialisation : créer l'échiquier et la table
    init: () => {
        createBoardandTable.drawBoardandTable();
    }

}


document.addEventListener('DOMContentLoaded', app.init);