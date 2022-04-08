import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { NgxChessBoardView } from 'ngx-chess-board';

import { Game } from '../../models/game.models';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  @ViewChild('board', { static: false }) board!: NgxChessBoardView;

  gameCollection: AngularFirestoreCollection<Game>;

  currentGameData: Game;
  currentGameDocumentId: string;
  currentCode: string;
  currentPlayerId: number;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.currentCode = this.route.snapshot.params['gameCode'];
    this.currentPlayerId = +this.route.snapshot.params['playerId'];
    this.getCurrentGameData(this.currentCode)
  }

  setPreviewGameStatement(currentFen: string): void {
    this.board.setFEN(currentFen)
  }

  getCurrentGameData(gameCode: string) {
    this.gameService.getGameDocByGameCode(gameCode).subscribe(
      (resp: any) => {
        this.currentGameData = resp[0].payload.doc.data();
        this.currentGameDocumentId = resp[0].payload.doc.ref.id // documentId

        console.log('update received', this.currentGameData)
      }
    )
  }

  moveDone(e: any): void {


    const gameUpdate: Game = {
      ...this.currentGameData,
      fen: e.fen.toString(),
      turnToPlay: 3
      // turnToPlay: this.currentPlayerId === 1 ? 2 : 1
    }

    console.log(gameUpdate);
    this.gameService.updateGame(gameUpdate, this.currentGameDocumentId)
  }

}


