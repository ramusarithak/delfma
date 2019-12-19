import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateadminPage } from './createadmin.page';
import { SharedModule } from '../shared/shared.module';
import { CreateadminService } from './service/createadmin.service';


const routes: Routes = [
  {
    path: '',
    component: CreateadminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [CreateadminPage],
  providers: [
    CreateadminService
  ]
})
export class CreateadminPageModule {}
