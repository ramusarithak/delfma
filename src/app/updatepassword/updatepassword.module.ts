import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'
import { IonicModule } from '@ionic/angular';

import { UpdatepasswordPage } from './updatepassword.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatepasswordPage
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
  declarations: [UpdatepasswordPage]
})
export class UpdatepasswordPageModule {}
