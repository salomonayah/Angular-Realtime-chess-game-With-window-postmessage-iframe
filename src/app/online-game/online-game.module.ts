import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { environment } from '../../environments/environment';
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
    NgxChessBoardModule.forRoot(),
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [GameService, ToastrService],
})
export class OnlineGameModule { }
