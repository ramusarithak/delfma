import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { VerifypagePage } from './verifypage.page';
import {VerifyService} from './service/verify.service'
const routes: Routes = [
  {
    path: '',
    component: VerifypagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  declarations: [VerifypagePage],
  providers: [VerifyService],

})
export class VerifypagePageModule {}
