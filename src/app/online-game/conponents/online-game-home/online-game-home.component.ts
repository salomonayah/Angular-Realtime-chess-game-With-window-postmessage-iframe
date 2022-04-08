import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Game } from '../../models/game.models';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-online-game-home',
  templateUrl: './online-game-home.component.html',
  styleUrls: ['./online-game-home.component.scss']
})
export class OnlineGameHomeComponent implements OnInit {

  wantToJoin: boolean;
  codeToJoinGame: string;
  loadingGame = false;

  constructor(
    private gameService: GameService,
    private router: Router,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  joinAGame() {

  }

  createNewGame() {
    this.loadingGame = true;
    const newGameData: Game = {
      gameCode: this.generateUniqueId(),
      fen: '',
      turnToPlay: 1,
      gameStarted: false,
      gameEnded: false
    }

    this.gameService.createGame(newGameData).then(
      (response) => {
        this.loadingGame = false;
        this.toast.success('New game successfully created !')
        this.router.navigateByUrl(`online-game/playground/1/game-code/${newGameData.gameCode}`);
      }
    ).catch((e) => {
      this.loadingGame = false;
      this.toast.error(e)
    });
  }

  generateUniqueId(): string {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2)
    return head + tail
  }

  isSet(value: any): boolean {
    if ((typeof value === 'string') && value.trim() === '') {
      return false;
    }
    return typeof value !== 'undefined' && value !== null && value;
  }

  onSubmit(formData: NgForm): void {
    const formValues = formData.form.value.code;
    this.router.navigateByUrl(`online-game/playground/2/game-code/${formValues}`);
  }

}
