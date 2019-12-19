import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { SharedModule } from '../shared/shared.module'
import { LoginService } from './services/login.service';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginPage],
  providers: [LoginService]
})
export class LoginPageModule {}
