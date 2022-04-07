import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChessBoardModule } from 'ngx-chess-board';

import { UrlsafetyPipe } from '../pipes/urlsafety.pipe';
import { IframepageComponent } from './components/iframepage/iframepage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { InitialGameStateRoutingModule } from './initial-game-state-routing.module';


@NgModule({
  declarations: [
    MainpageComponent,
    IframepageComponent,
    UrlsafetyPipe,
  ],
  imports: [
    CommonModule,
    InitialGameStateRoutingModule,
    NgxChessBoardModule.forRoot()
  ]
})
export class InitialGameStateModule { }
