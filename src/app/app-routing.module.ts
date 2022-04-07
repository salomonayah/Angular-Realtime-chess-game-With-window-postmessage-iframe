import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'online-game',
    loadChildren: () =>
      import('./online-game/online-game.module').then((mod) => mod.OnlineGameModule),
  },
  {
    path: '',
    loadChildren: () => import('./initial-game-state/initial-game-state.module').then((mod) => mod.InitialGameStateModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
