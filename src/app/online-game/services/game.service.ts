import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Game } from '../models/game.models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private angularFirestore: AngularFirestore) { }

  getGameDoc(id: string) {
    return this.angularFirestore
      .collection('game-collection')
      .doc(id)
      .valueChanges();
  }

  getGameList() {
    return this.angularFirestore
      .collection('game-collection')
      .snapshotChanges();
  }

  createGame(game: Game) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('game-collection')
        .add(game)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteGame(game: Game) {
    return this.angularFirestore
      .collection('game-collection')
      .doc(game.id)
      .delete();
  }

  updateGame(game: Game, id: string) {
    return this.angularFirestore.collection('game-collection').doc(id).update({
      gameCode: game.gameCode,
      turnToPlay: game.turnToPlay,
      gameEnded: game.gameEnded
    });
  }
}
