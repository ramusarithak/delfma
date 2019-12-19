import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JobstatusPage } from './jobstatus.page';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { JobstatusService } from './jobstatus.service';
import { SharedModule } from '../shared/shared.module'

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },{
    path: 'addstatus',
    component: AddComponent
  },{
    path: ':id',
    component: AddComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    JobstatusPage,
    AddComponent,
    ListComponent,
  ],
  providers: [
    JobstatusService
  ]
})
export class JobstatusPageModule {}
