import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JobpriorityPage } from './jobpriority.page';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { JobpriorityService } from './jobpriority.service'
import { SharedModule } from '../shared/shared.module'


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },{
    path: 'addpriority',
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
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    JobpriorityPage,
    AddComponent,
    ListComponent,
  ],
  providers: [
    JobpriorityService
  ]
})
export class JobpriorityPageModule {}
