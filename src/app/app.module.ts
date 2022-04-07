import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineGameSourceFrameComponent } from './pages/online-game-source-frame/online-game-source-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineGameSourceFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
