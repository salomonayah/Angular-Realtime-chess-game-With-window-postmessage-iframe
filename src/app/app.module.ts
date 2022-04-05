import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChessBoardModule } from 'ngx-chess-board';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IframepageComponent } from './pages/iframepage/iframepage.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { UrlsafetyPipe } from './pipes/urlsafety.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    IframepageComponent,
    UrlsafetyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChessBoardModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
