import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ForgotpasswordPage } from './forgotpassword.page';
import { SharedModule } from '../shared/shared.module'
import { ForgotService } from './service/forgot.service';

const routes: Routes = [
  {
    path: '',
    component: ForgotpasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ForgotpasswordPage],
  providers: [
    ForgotService
  ]
})
export class ForgotpasswordPageModule {}
