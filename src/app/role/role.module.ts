import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RolePage } from './role.page';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { SharedModule } from '../shared/shared.module';
import { RoleService } from './role.service';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },{
    path: 'addrole',
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
    SharedModule
  ],
  declarations: [
    RolePage,
    ListComponent,
    AddComponent
  ],
  providers: [
    RoleService,
  ]
})
export class RolePageModule {}
