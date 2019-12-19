import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FacilityService } from './facility.service'

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },{
    path: 'addfacility',
    component: AddComponent
  },
  {
    path: 'edit/:editid',
    component: AddComponent
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
  declarations: [
    AddComponent,
    ListComponent
  ],
  providers: [
    FacilityService
  ]
})
export class FacilityPageModule {}
