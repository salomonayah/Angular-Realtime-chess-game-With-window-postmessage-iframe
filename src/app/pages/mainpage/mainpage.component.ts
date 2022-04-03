import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  width = 600
  height = 600
  src = 'http://localhost:4200/iframepage'
  // src = 'https://pencilapp.com/'

  constructor() { }

  ngOnInit(): void {
  }

}
