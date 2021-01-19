DROP TABLE IF EXISTS "chess";

CREATE TABLE "chess"(
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "color" TEXT NOT NULL,
  "state" INTEGER NOT NULL,
  "pos_x" TEXT NOT NULL,
  "pos_y" INTEGER NOT NULL,
  "cell_color" TEXT NOT NULL,
  "pawn_spec" INTEGER NOT NULL,
  "image" TEXT NOT NULL
);

INSERT INTO "chess"("name", "color", "state", "pos_x", "pos_y", "cell_color", "pawn_spec", "image") VALUES
('rook_3',   'black', 1, 'a', 8, 'white', 0, 'rook_black.png'),
('knight_3', 'black', 1, 'b', 8, 'black', 0, 'knight_black.png'),
('bishop_3', 'black', 1, 'c', 8, 'white', 0, 'bishop_black.png'),
('queen_2',  'black', 1, 'd', 8, 'black', 0, 'queen_black.png'),
('king_2',   'black', 1, 'e', 8, 'white', 0, 'king_black.png'),
('bishop_4', 'black', 1, 'f', 8, 'black', 0, 'bishop_black.png'),
('knight_4', 'black', 1, 'g', 8, 'white', 0, 'knight_black.png'),
('rook_4',   'black', 1, 'h', 8, 'black', 0, 'rook_black.png'),
('pawn_9',   'black', 1, 'a', 7, 'black', 0, 'pawn_black.png'),
('pawn_10',  'black', 1, 'b', 7, 'white', 0, 'pawn_black.png'),
('pawn_11',  'black', 1, 'c', 7, 'black', 0, 'pawn_black.png'),
('pawn_12',  'black', 1, 'd', 7, 'white', 0, 'pawn_black.png'),
('pawn_13',  'black', 1, 'e', 7, 'black', 0, 'pawn_black.png'),
('pawn_14',  'black', 1, 'f', 7, 'white', 0, 'pawn_black.png'),
('pawn_15',  'black', 1, 'g', 7, 'black', 0, 'pawn_black.png'),
('pawn_16',  'black', 1, 'h', 7, 'white', 0, 'pawn_black.png'),
('none',     'none' , 0, 'a', 6, 'white', 0, 'none'),
('none',     'none' , 0, 'b', 6, 'black', 0, 'none'),
('none',     'none' , 0, 'c', 6, 'white', 0, 'none'),
('none',     'none' , 0, 'd', 6, 'black', 0, 'none'),
('none',     'none' , 0, 'e', 6, 'white', 0, 'none'),
('none',     'none' , 0, 'f', 6, 'black', 0, 'none'),
('none',     'none' , 0, 'g', 6, 'white', 0, 'none'),
('none',     'none' , 0, 'h', 6, 'black', 0, 'none'),
('none',     'none' , 0, 'a', 5, 'black', 0, 'none'),
('none',     'none' , 0, 'b', 5, 'white', 0, 'none'),
('none',     'none' , 0, 'c', 5, 'black', 0, 'none'),
('none',     'none' , 0, 'd', 5, 'white', 0, 'none'),
('none',     'none' , 0, 'e', 5, 'black', 0, 'none'),
('none',     'none' , 0, 'f', 5, 'white', 0, 'none'),
('none',     'none' , 0, 'g', 5, 'black', 0, 'none'),
('none',     'none' , 0, 'h', 5, 'white', 0, 'none'),
('none',     'none' , 0, 'a', 4, 'white', 0, 'none'),
('none',     'none' , 0, 'b', 4, 'black', 0, 'none'),
('none',     'none' , 0, 'c', 4, 'white', 0, 'none'),
('none',     'none' , 0, 'd', 4, 'black', 0, 'none'),
('none',     'none' , 0, 'e', 4, 'white', 0, 'none'),
('none',     'none' , 0, 'f', 4, 'black', 0, 'none'),
('none',     'none' , 0, 'g', 4, 'white', 0, 'none'),
('none',     'none' , 0, 'h', 4, 'black', 0, 'none'),
('none',     'none' , 0, 'a', 3, 'black', 0, 'none'),
('none',     'none' , 0, 'b', 3, 'white', 0, 'none'),
('none',     'none' , 0, 'c', 3, 'black', 0, 'none'),
('none',     'none' , 0, 'd', 3, 'white', 0, 'none'),
('none',     'none' , 0, 'e', 3, 'black', 0, 'none'),
('none',     'none' , 0, 'f', 3, 'white', 0, 'none'),
('none',     'none' , 0, 'g', 3, 'black', 0, 'none'),
('none',     'none' , 0, 'h', 3, 'white', 0, 'none'),
('pawn_1',   'white', 1, 'a', 2, 'white', 0, 'pawn_white.png'),
('pawn_2',   'white', 1, 'b', 2, 'black', 0, 'pawn_white.png'),
('pawn_3',   'white', 1, 'c', 2, 'white', 0, 'pawn_white.png'),
('pawn_4',   'white', 1, 'd', 2, 'black', 0, 'pawn_white.png'),
('pawn_5',   'white', 1, 'e', 2, 'white', 0, 'pawn_white.png'),
('pawn_6',   'white', 1, 'f', 2, 'black', 0, 'pawn_white.png'),
('pawn_7',   'white', 1, 'g', 2, 'white', 0, 'pawn_white.png'),
('pawn_8',   'white', 1, 'h', 2, 'black', 0, 'pawn_white.png'),
('rook_1',   'white', 1, 'a', 1, 'black', 0, 'rook_white.png'),
('knight_1', 'white', 1, 'b', 1, 'white', 0, 'knight_white.png'),
('bishop_1', 'white', 1, 'c', 1, 'black', 0, 'bishop_white.png'),
('queen_1',  'white', 1, 'd', 1, 'white', 0, 'queen_white.png'),
('king_1',   'white', 1, 'e', 1, 'black', 0, 'king_white.png'),
('bishop_2', 'white', 1, 'f', 1, 'white', 0, 'bishop_white.png'),
('knight_2', 'white', 1, 'g', 1, 'black', 0, 'knight_white.png'),
('rook_2',   'white', 1, 'h', 1, 'white', 0, 'rook_white.png');