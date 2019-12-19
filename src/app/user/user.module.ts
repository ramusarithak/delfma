import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserPage } from './user.page';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../user/user.service';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'adduser',
    component: AddComponent
  },
  {
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
    UserPage,
    AddComponent,
    ListComponent
  ],
  providers: [
    UserService
  ]
})
export class UserPageModule {}
