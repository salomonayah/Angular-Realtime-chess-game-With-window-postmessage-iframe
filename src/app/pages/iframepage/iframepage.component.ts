import { Component, OnInit } from '@angular/core';
import { NgxChessBoardService } from 'ngx-chess-board';

@Component({
  selector: 'app-iframepage',
  templateUrl: './iframepage.component.html',
  styleUrls: ['./iframepage.component.scss']
})
export class IframepageComponent implements OnInit {

  constructor(private ngxChessBoardService: NgxChessBoardService) { }

  ngOnInit(): void {
  }

}
