import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('message', (e) => {
      if (e.data.type != 'webpackOk') {
        const moveDetails = e.data.moveDetails;
        //@ts-ignore //this because Ts don't the type of the event
        const sender = e.source.frameElement?.id

        //@ts-ignore //this because Ts don't the type of the event
        e.source.postMessage({ moveDetails, sender }, e.origin)
      }
    })
  }

  moveIframeOne(e: any) {

  }

  moveIframeTwo(e: any) {

  }

}
