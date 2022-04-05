import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService, NgxChessBoardView } from 'ngx-chess-board';

@Component({
  selector: 'app-iframepage',
  templateUrl: './iframepage.component.html',
  styleUrls: ['./iframepage.component.scss']
})
export class IframepageComponent implements OnInit {

  @ViewChild('board', { static: false }) board!: NgxChessBoardView;


  constructor(private ngxChessBoardService: NgxChessBoardService) { }

  ngOnInit(): void {
    window.addEventListener('message', ({ data }) => {

      if (data.type === 'update') {
        this.board.setFEN(data.fen)
        if (data.sender === 'chessBoardIframe1') {
          this.board.reverse()
        }
      } else if (data.type === 'reverse') {
        this.board.reverse()
      }

    })
  }

  moveDone(e: any) {
    //@ts-ignore //this because Ts don't the type of the event
    window.parent.postMessage({ move: e, type: "update" }, "*")
  }


}
