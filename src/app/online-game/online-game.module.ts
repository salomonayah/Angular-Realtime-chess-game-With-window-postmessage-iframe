import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '../../environments/environment';
import { OnlineGameHomeComponent } from './conponents/online-game-home/online-game-home.component';
import { PlaygroundComponent } from './conponents/playground/playground.component';
import { OnlineGameRoutingModule } from './online-game-routing.module';

@NgModule({
  declarations: [
    OnlineGameHomeComponent,
    PlaygroundComponent
  ],
  imports: [
    CommonModule,
    OnlineGameRoutingModule,
    NgxChessBoardModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot()
  ]
})
export class OnlineGameModule { }
