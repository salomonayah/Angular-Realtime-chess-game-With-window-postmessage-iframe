import { Component, OnInit } from '@angular/core';
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

  constructor(
    private gameService: GameService,
    private router: Router,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  createNewGame() {
    const newGameData: Game = {
      gameCode: this.generateUniqueId(),
      turnToPlay: 1,
      gameEnded: false
    }
    console.log(newGameData);
    this.gameService.createGame(newGameData).then(
      (response) => {
        console.log(response);
        this.toast.success('New game successfully created !')
        this.router.navigateByUrl(`playground/1/game-code/${newGameData.gameCode}`);
      }
    ).catch((e) => {
      console.log(e)
      this.toast.error(e)
    });
  }

  generateUniqueId(): string {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2)
    return head + tail
  }

}
