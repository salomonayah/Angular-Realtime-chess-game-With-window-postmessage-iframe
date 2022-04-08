import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IframepageComponent } from './components/iframepage/iframepage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SelectOptionComponent } from './components/select-option/select-option.component';


const routes: Routes = [
  {
    path: '',
    component: SelectOptionComponent,
  },
  {
    path: 'mainpage',
    component: MainpageComponent,
  },
  {
    path: 'iframepage',
    component: IframepageComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialGameStateRoutingModule { }
