import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openPlayOnlineHome() {
    this.router.navigateByUrl('/online-game');
  }

  openMainPage() {
    this.router.navigateByUrl('/mainpage');
  }


}
