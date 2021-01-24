# Mon petit jeu d'échecs

Ce Readme ne sert qu'à apporter les commandes d'installations, la roadmap des choses et idées prévues pour un jour dans le futur ainsi que les règles communes des échecs.

Je fais beaucoup de commentaires avec //? car avec better comments, ils se colorient en bleu et j'aime bien

## Installation (classique) :

<details>
<summary>Développer</summary>

- **1 : npm i** (Comprend dotenv ; express ; multer ; pg ; sequelize) (peut-être bcrypt ; ejs ; email-validator et express-session dans le futur)  

- **2 : Création de la BDD** 
  - `sudo -i -u postgres;` sur Ubuntu ou  `psql -U postgres` sur Windows
  - `psql`
  - `CREATE ROLE chess WITH LOGIN PASSWORD 'chess';`
  - `CREATE DATABASE chess OWNER chess;`
    
    **Sur un autre terminal :**
  - `psql -U chess -d chess -f ./data/create_db.sql;` + MDP `chess`

- **3 : Créer le .env**
  - À l'intérieur du .env, mettre : 
  - `PG_URL=postgresql://chess:chess@localhost:5432/chess`
  - `PORT=3000`

Et voilà 

</details>

## Roadmap des fonctionnalités à faire

<details>
<summary>Développer</summary>

### <span style="color:red">En rouge, les choses actuellement en dev</span>
  
  - 2 ème étape : **Identification des coups possibles**
    - a: Quand une case est sélectionnée, cela part en JS pendant un moment pour sortir un tableau/objet de toutes les cases où il est possible d'aller.
    - a': (*OU A chaque coup, le JS va calculer pour chaque pièce tous les coups possible (pour une seule couleur) et donc avoir compteur et check-if-mate*)
    - b: Ces cases devront être colorié avec une 4ème couleur
    - c: Ces cases devront être cliquables.
    - d: En cliquand sur l'une de ces cases (donc les cases "coup possible"), cela doit déplacer la pièce original vers cette nouvelle case.
    - e: Si la nouvelle case de la pièce contenait déjà une pièce (adverse), elle doit être retiré du plateau (BONUS : et mise dans le cimetière)
    - f: Retour à l'état initial

  - 3 ème étape : **Les règle de la partie**
    - a: A chaque coup effectué, on revient donc à l'état initial
    - b: Dans cet état, il faut calculer tous les coup possible pour chaque pièce pour le joueur dont c'est le tour.
    - c: Je ne sais comment, si le joueur est en échec, on doit donc limiter les coups à tout ceux qui lui permettent de sortir de cet état.
    - d: Pour déterminer l'échec et mat, il faut vérifier que peu importe le coup joué parmis ceux en état d'échec, le joueur reste en échec. Si c'est le cas, alors c'est checkmate.

  - 4 ème étape : **Relation entre les joueurs**
    - a: Mise en place d'une page d'accueuil
    - b: Paramétrage d'une partie (simple au début avec seulement 1 ou deux joueurs)
    - c: En fonction de la couleur choisie si "un joueur", s'arranger pour que l'ordinateur joue un coup aléatoire avec un faux délai de réflexion

</details>

## Idées en vrac, pas forcément prévue

<details>
<summary>Développer</summary>

### <span style="color:green">**Pas très important**</span> ; <span style="color:blue">**Assez important**</span> ; <span style="color:red">**Important**</span>

- <span style="color:green">Rajouter un délai minimal et maximal (un compteur total ?) pour les coup de chaque joueur</span>
- <span style="color:green">Rajouter un dégradé sur les case (genre reflet)</span>
- <span style="color:red">Rajouter une option en début de partie pour paramétrer (jouer seul / à deux en local / à deux en ligne)</span>
- <span style="color:blue">Rajouter une animation quand une pièce se déplace d'une case à une autre</span>
- <span style="color:green">Rajouter une animation et une option pour déplacer les pièces sorties dans un cimetière</span>
- <span style="color:red">Un enregistrement de toutes les parties joués, un moyen de les consulter (voir les fiches lors des championnats) et un moyen de les faire rejouer.</span>
- <span style="color:red">Rajouter une option pour changer les couleurs/le thème.</span>
- <span style="color:blue">Affichage du contrôle de chaque joueur</span>
- <span style="color:green">Affichage particulier des pièces en cas de vitoires + animations ?</span>
- <span style="color:red">Afficher un tableau dynamique sur la droite du jeu qui récapitulera tous les coup (avec mise en forme des coup lorsque MEURTRE)</span>
- <span style="color:green">Enregistrer un nom pour chaque joueur, l'inscrire en base de donnée (unique avec mot de passe et il pourrait retrouver se sparties précédentes)</span>
- <span style="color:green">En activant le mode DangerZone, survoler une case, mettrait en surbrillance les pièces responsables du contrôle</span>
- <span style="color:blue">Intégrer une règle dans la page</span>

</details>

## Détails à régler, trucs à faire, à débugger

<details>
<summary>Développer</summary>

- Si CODE dans le back, a chaque déplacement, avant de bouger la pièce, faire une vérification que ce déplacement est légal (ne pas faire confiance à l'user et au JS front)
- Un bug récurrent mais irreproduisible sur commande fait que lors de la sélection d'une pièce, tous les events listener originaux ne sont pas systématiquement supprimés. Il peut en rester 3 ou 4 qui rend la sélection de pièce multiples possibles. GRAVE (J'ai fait un truc, je ne suis pas sûr mais ça l'a peut-être régle. Je laisse cette ligne quand même on sait jamais.)
- La partie let color avec le if et l'insertion dans l'objet d ela pièce est répété 6 fois. Très facile à factoriser en unifiant les fonctions.
- Pour "délirer", bundlizer le back et le front et les réunir en deux fichiers uniquement.

</details>

## Fonctionnalités finies

<details>
<summary>Développer</summary>

- Création de l'échiquier, des lettres, des nombres automatisé et synchro avec des setTimeout.
- Création de la base de données (mais qui sera peut-être remplacé par un simple objet)
- Étape 0 : <span style="color:red">**Création, conception d'un plan "optimisé" à toutes les règles**</span>
- 1 ère étape : **La sélection des pièces**
    - a: Je ne dois pouvoir cliquer que sur les case qui contienne une pièce.
    - b: Quand je clique sur une pièce, elle doit se mettre en surbrillance
    - c: Quand une case est sélectionné, on ne doit plus pouvoir sélectionner la moindre case (peut-être rajouter une option empêchant toute action de l'user pendant une seconde ou deux pour être sûr);
    - d: Quand une case est sélectionné, elle doit pouvoir être recliqué pour la déselectionner ce qui fait revenir à l'état initial.

</details>

## Les règles des échecs

<details>
<summary>Développer</summary>

- La case en bas à droite (H1) est blanche
### Echec
- Conditions d'échec : Lorsque la case occupée par le Roi est contrôlée par une pièce de l'adversaire (en gros, le roi peut se faire manger au prochain tour)
- Conditions d'échec et mat :
  - Le roi est en échec et ne peut plus se déplacer
  - Aucune pièce alliée ne peut le sauver
  - La pièce adverse menaçante ne peut être éliminée
### Le pat
-   Le roi ne peut pas se déplacer sans se mettre en échec
-   Aucune autre pièce ne peut être déplacée
### Partie nulle
- Par consentement mutuel (implique un bouton)
- Si 50 coups ont été effectués sans déplacements de pions ou prise de pièces.
- S'il ne reste que les deux rois.

### Déplacement (et particularités) des pièces

#### Le pion
  - Avance droit devant lui, ne recule jamais
  - Avance d'une case (ou deux à son premier coup)
  - Capture en diagonale
  - (Se transforme en une autrte pièce (au choix du joueur exepté le roi) si atteint la ligne extrême adverse (Ligne 8 pour un pion blanc, ligne 1 pour un pion noir))

#### Le cavalier
  - Ignore les autres pièces
  - Se déplace de deux cases puis de une (forme de L, implique donc un maximum de 8 déplacements possibles par cavalier)
  - Change de couleur à chaque déplacement

#### Le fou
  - Se déplace en diagonale d'autant de case qu'il le veut (sauf rencontre)
  - Reste toujours sur sa couleur

#### La tour
  - Déplacement en ligne (horizontal/vertical) d'autant de case qu'il le veut (sauf rencontre)

#### Le roi
  - Se déplace dans toutes les directions possibles d'une seule case à la fois
  - Ne doit jamais se déplacer dans une case contrôlée par l'adversaire

#### La dame
  - Cumule déplacement en diagonale et en ligne. Ainsi, comme le roi, elle peut se déplacer dans les 8 directions, mais aussi loin qu'elle le veut (sauf rencontre)

#### Le roque
  - Le roi se déplace vers l'une de ses tours, se colle à elle, la tour saute par dessus le roi et passe de l'autre côté.
  - Ni le roi, ni la tour concernée ne doivent avoir bougé depuis le début de la partie
  - Le roi ne peut accomplir cette action s'il est en échec
  - Aucune des pièces adverses ne doit contrôler les deux ou trois cases séparant la tour du roi.

#### La prise en passant
  - Si un pion adverse vient d'avancer de deux cases et se retrouve adjacent à l'un des pions du joueur, celui-ci peut choisir d'effectuer la prise en passant. C'est-à-dire, bouger en diagonale derrière le pion adverse et le "prendre" par la même occasion.
  - Le pion ne peut faire cette action que directement après le déplacement de deux cases adverses.

</details>