export interface Game {
  id?: string;
  fen: string;
  gameCode: string;
  turnToPlay: number;
  gameStarted: boolean;
  gameEnded: boolean;
}

// gameCode turnToPlay gameEnded
