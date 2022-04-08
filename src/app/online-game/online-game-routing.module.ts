import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnlineGameHomeComponent } from './conponents/online-game-home/online-game-home.component';
import { PlaygroundComponent } from './conponents/playground/playground.component';

const routes: Routes = [
  {
    path: '',
    component: OnlineGameHomeComponent,
  },
  {
    path: 'playground/:playerId/game-code/:gameCode',
    component: PlaygroundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineGameRoutingModule { }
