import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit, AfterViewInit {

  @ViewChild('iframeElement', { static: true }) iframeElement!: HTMLIFrameElement;
  innerDoc!: any;
  @Input() idNumber!: number;
  @Input() width!: number;
  @Input() height!: number;
  @Input() src!: string;
  @Input() inputPieceMove!: string;

  constructor() { }

  ngOnInit(): void {

  }

  onLoad(iframeEvent: any) {
    console.log('iframe loaded event')
  }

  ngAfterViewInit(): void {
    this.iframeElement.contentWindow!.postMessage({ data: "test" }, "*")
  }


}
