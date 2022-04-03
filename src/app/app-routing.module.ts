import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IframepageComponent } from './pages/iframepage/iframepage.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'iframepage',
    component: IframepageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
