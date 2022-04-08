import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgxChessBoardModule } from 'ngx-chess-board';

import { environment } from '../../environments/environment';
import { UrlsafetyPipe } from '../pipes/urlsafety.pipe';
import { OnlineGameSourceFrameComponent } from './conponents/online-game-source-frame/online-game-source-frame.component';
import { PlayerOneFrameComponent } from './conponents/player-one-frame/player-one-frame.component';
import { PlayerTwoFrameComponent } from './conponents/player-two-frame/player-two-frame.component';
import { OnlineGameRoutingModule } from './online-game-routing.module';

@NgModule({
  declarations: [
    OnlineGameSourceFrameComponent,
    PlayerOneFrameComponent,
    PlayerTwoFrameComponent,
    UrlsafetyPipe
  ],
  imports: [
    CommonModule,
    OnlineGameRoutingModule,
    NgxChessBoardModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ]
})
export class OnlineGameModule { }
