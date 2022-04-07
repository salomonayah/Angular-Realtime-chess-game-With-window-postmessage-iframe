import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { environment } from '../../../../environments/environment';

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
    this.setTurnToPlay()
  }


  setTurnToPlay(): void {
    const currentTurnToPlay = Number(localStorage.getItem('turnToPlay'));

    if (currentTurnToPlay) {
      this.turnToPlay = currentTurnToPlay
    }
  }


  sendReverseOnLoad(): void {
    this.iframeTwoContent.postMessage({ reverse: true, type: "reverse" }, `${environment.serverUrl}/iframepage`)
  }

  listenToFrameEvent(): void {
    window.addEventListener('message', (e: any) => {

      if (e.origin !== environment.serverUrl) { return; }

      const { data } = e;

      if (data.type != 'webpackOk' && data?.move) {
        const moveUpdateData = {
          fen: data.move.fen,
          sender: e.source.frameElement?.id,
          type: "update"
        }

        this.postEventInsideIframeContent(moveUpdateData)

        if (data?.move?.mate) {  // if the move is a check mate then display alert
          this.displayCheckMateModal = true;
        }
      }
    })
  }


  postEventInsideIframeContent(moveUpdateData: { fen: string; sender: string; type: string; }): void {

    switch (moveUpdateData.sender) {

      case 'chessBoardIframe1':

        this.iframeTwoContent.postMessage(moveUpdateData, `${environment.serverUrl}/iframepage`);
        this.turnToPlay = 2;
        localStorage.setItem('turnToPlay', this.turnToPlay.toString())
        break;

      case 'chessBoardIframe2':

        this.iframeOneContent.postMessage(moveUpdateData, `${environment.serverUrl}/iframepage`);
        this.turnToPlay = 1;
        localStorage.setItem('turnToPlay', this.turnToPlay.toString())
        break;
    }

  }

  resetAll(): void {

    this.iframeOneContent.postMessage({ reset: true, type: "reset" }, `${environment.serverUrl}/iframepage`);
    this.iframeTwoContent.postMessage({ reset: true, type: "reset" }, `${environment.serverUrl}/iframepage`);
  }

  ngAfterViewInit(): void {
    this.iframeOneContent = this.iframeElement1.nativeElement.contentWindow
    this.iframeTwoContent = this.iframeElement2.nativeElement.contentWindow
    this.listenToFrameEvent()
  }

}
