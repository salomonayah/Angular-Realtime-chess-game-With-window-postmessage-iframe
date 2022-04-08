import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxChessBoardView } from 'ngx-chess-board';
import { ToastrService } from 'ngx-toastr';

import { environment } from '../../../../environments/environment';
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
  linkToJoin = `${environment.serverUrl}/online-game`;
  currentPlayerId: number;
  displayCheckMateModal = false;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentCode = this.route.snapshot.params['gameCode'];
    this.currentPlayerId = +this.route.snapshot.params['playerId'];
    this.getCurrentGameData(this.currentCode)
  }

  setPreviewGameStatement(currentFen: string): void {
    this.board.setFEN(currentFen)
    if (this.currentPlayerId === 2) { this.board.reverse() }
  }

  getCurrentGameData(gameCode: string) {
    this.gameService.getGameDocByGameCode(gameCode).subscribe(
      (resp: any) => {
        if (resp.length === 0) {
          this.canNotStartTheGame()
        }
        this.currentGameData = resp[0].payload.doc.data(); // documentData
        this.currentGameDocumentId = resp[0]?.payload.doc.ref.id // documentId
        this.setPreviewGameStatement(this.currentGameData.fen) // set board
        if (this.currentGameData.gameEnded) {  // if the move is a check mate then display alert
          this.displayCheckMateModal = true;
        }
      }, (error) => {
        this.canNotStartTheGame()
      }
    )
  }

  canNotStartTheGame() {
    this.toast.error("Sorry we can't find this game! Invalid code. Please try again");
    this.router.navigateByUrl(`online-game`);
  }

  isYourTurn() {
    return ((this.currentGameData?.turnToPlay === this.currentPlayerId) && !this.currentGameData.gameEnded)
  }

  moveDone(e: any): void {
    const moveFen: string = e.fen

    const gameUpdate: Game = {
      gameCode: this.currentGameData.gameCode,
      fen: moveFen,
      turnToPlay: this.currentPlayerId === 1 ? 2 : 1,
      gameStarted: true,
      gameEnded: e.mate ? true : false
    }

    this.gameService.updateGame(gameUpdate, this.currentGameDocumentId)
  }

  startNewGame() {
    this.router.navigateByUrl(`online-game`);
  }

}


