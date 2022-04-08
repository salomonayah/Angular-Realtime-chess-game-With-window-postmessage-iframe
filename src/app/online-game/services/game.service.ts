import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Game } from '../models/game.models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private angularFirestore: AngularFirestore) { }

  getGameDocById(id: string) {
    return this.angularFirestore
      .collection('game-collection')
      .doc(id)
      .valueChanges();
  }

  getGameDocByGameCode(gameCode: string) {
    return this.angularFirestore
      .collection('game-collection', ref => ref.where('gameCode', '==', `${gameCode}`)).snapshotChanges()
  }

  getGameList() {
    return this.angularFirestore
      .collection('game-collection')
      .snapshotChanges();
  }

  createGame(game: Game) {
    return this.angularFirestore.collection('game-collection').add(game)
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
