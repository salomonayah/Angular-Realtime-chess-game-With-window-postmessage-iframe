import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService, NgxChessBoardView } from 'ngx-chess-board';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-online-game-source-frame',
  templateUrl: './online-game-source-frame.component.html',
  styleUrls: ['./online-game-source-frame.component.scss']
})
export class OnlineGameSourceFrameComponent implements OnInit {


  @ViewChild('board', { static: false }) board!: NgxChessBoardView;


  constructor(private ngxChessBoardService: NgxChessBoardService) { }

  ngOnInit(): void {
  }

  listenToMessageEvent(): void {
    window.addEventListener('message', ({ data }) => {

      switch (data.type) {

        case 'update':
          localStorage.setItem('lastFem', data.fen)
          this.board.setFEN(data.fen)
          if (data.sender === 'chessBoardIframe1') { this.board.reverse() }
          break;

        case 'reverse':
          this.board.reverse()
          break;

        case 'reset':
          localStorage.clear()
          this.board.reset()
          break;

      }

    })

  }

  moveDone(e: any): void {
    // window.parent.postMessage({ move: e, type: "update" }, `*`)
    window.parent.postMessage({ move: e, type: "update" }, `${environment.serverUrl}`)
  }

  setPreviewGameStatement(): void {
    const currentFen = localStorage.getItem('lastFem');

    if (currentFen) {
      this.board.setFEN(currentFen)
    }
  }

  ngAfterViewInit(): void {
    this.setPreviewGameStatement();
    this.listenToMessageEvent();
  }

}
