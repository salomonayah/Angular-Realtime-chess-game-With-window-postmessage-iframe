import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { OnlineGameHomeComponent } from './conponents/online-game-home/online-game-home.component';
import { PlaygroundComponent } from './conponents/playground/playground.component';
import { OnlineGameRoutingModule } from './online-game-routing.module';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    OnlineGameHomeComponent,
    PlaygroundComponent
  ],
  imports: [
    CommonModule,
    OnlineGameRoutingModule,
    ToastrModule.forRoot(),
    NgxChessBoardModule.forRoot(),
  ],
  providers: [GameService, ToastrService],
})
export class OnlineGameModule { }
