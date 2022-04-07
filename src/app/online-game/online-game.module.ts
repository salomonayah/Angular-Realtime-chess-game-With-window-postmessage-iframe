import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OnlineGameSourceFrameComponent } from './conponents/online-game-source-frame/online-game-source-frame.component';
import { PlayerOneFrameComponent } from './conponents/player-one-frame/player-one-frame.component';
import { PlayerTwoFrameComponent } from './conponents/player-two-frame/player-two-frame.component';
import { OnlineGameRoutingModule } from './online-game-routing.module';


@NgModule({
  declarations: [
    OnlineGameSourceFrameComponent,
    PlayerOneFrameComponent,
    PlayerTwoFrameComponent
  ],
  imports: [
    CommonModule,
    OnlineGameRoutingModule
  ]
})
export class OnlineGameModule { }
