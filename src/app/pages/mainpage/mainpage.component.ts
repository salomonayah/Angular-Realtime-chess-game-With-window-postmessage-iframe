import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService } from 'ngx-chess-board';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {


  @ViewChild('iframeElement1', { static: true }) iframeElement1!: ElementRef;
  @ViewChild('iframeElement2', { static: true }) iframeElement2!: ElementRef;

  iframeOneNewMove!: string;
  iframeTwoNewMove!: string;

  url = 'http://localhost:4200/iframepage'

  constructor(private ngxChessBoardService: NgxChessBoardService) { }

  ngOnInit(): void {
    window.addEventListener('message', (e) => {
      console.log(e)
      const { data } = e;

      if (data.type === 'update') {

        //@ts-ignore //this because Ts don't the type of the event
        const sender = e.source.frameElement?.id

        if (sender === 'chessBoardIframe1') {
          this.iframeElement2.nativeElement.contentWindow.postMessage({ fen: data.move.fen, sender: sender, type: "update" }, "*")

        } else if (sender === 'chessBoardIframe2') {
          this.iframeElement1.nativeElement.contentWindow.postMessage({ fen: data.move.fen, sender: sender, type: "update" }, "*")
        }

      }
    })
  }

  sendReverse() {
    this.iframeElement2.nativeElement.contentWindow.postMessage({ reverse: true, type: "reverse" }, "*")
  }

}
