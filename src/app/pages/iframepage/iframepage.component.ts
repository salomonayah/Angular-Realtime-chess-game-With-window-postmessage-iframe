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
    window.addEventListener('message', (e) => {

      if (e.data.type != 'webpackOk') {
        console.log('iframe page receive event from main', e);
      }

    })
  }

  reset() {
    this.board.reset();
  }

  moveDone(e: any) {
    window.parent.postMessage({ moveDetails: e }, "*")
  }

  setMove(newPosition: string) {
    this.board.setFEN(newPosition);
  }

}
