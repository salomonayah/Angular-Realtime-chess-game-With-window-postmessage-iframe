import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit, AfterViewInit {


  @ViewChild('iframeElement1', { static: true }) iframeElement1!: ElementRef;
  @ViewChild('iframeElement2', { static: true }) iframeElement2!: ElementRef;

  iframeOneContent!: Window;
  iframeTwoContent!: Window;

  turnToPlay: number = 1

  displayCheckMateModal = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('message', (e: any) => {
      const { data, source } = e;

      console.log(data.move.mate)

      if (data.type != 'webpackOk') {
        const moveUpdateData = {
          fen: data.move.fen,
          sender: e.source.frameElement?.id,
          type: "update"
        }

        this.postEventInsideIframeContent(moveUpdateData)

        if (data?.move?.mate) {  // if the move is a check mate then it is a frame update
          this.displayCheckMateModal = true;
        }
      }
    })
  }

  sendReverse() {
    this.iframeTwoContent.postMessage({ reverse: true, type: "reverse" }, `${environment.serverUrl}/iframepage`)
  }

  postEventInsideIframeContent(moveUpdateData: { fen: string; sender: string; type: string; }) {

    switch (moveUpdateData.sender) {

      case 'chessBoardIframe1':

        this.iframeTwoContent.postMessage(moveUpdateData, `${environment.serverUrl}/iframepage`);
        this.turnToPlay = 2;
        break;

      case 'chessBoardIframe2':

        this.iframeOneContent.postMessage(moveUpdateData, `${environment.serverUrl}/iframepage`);
        this.turnToPlay = 1;
        break;
    }

  }

  resetAll() {
    this.iframeOneContent.postMessage({ reset: true, type: "reset" }, `${environment.serverUrl}/iframepage`);
    this.iframeTwoContent.postMessage({ reset: true, type: "reset" }, `${environment.serverUrl}/iframepage`);
  }

  ngAfterViewInit(): void {
    this.iframeOneContent = this.iframeElement1.nativeElement.contentWindow
    this.iframeTwoContent = this.iframeElement2.nativeElement.contentWindow
  }

}
