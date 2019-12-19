import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CustomerPage } from './customer.page';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerService } from './customer.service';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'addcustomer',
    component: AddComponent,
  },
  {
    path: 'edit/:editid',
    component: AddComponent,
  },
  {
    path:':customerid', loadChildren: '../facility/facility.module#FacilityPageModule',
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
  declarations: [CustomerPage, ListComponent, AddComponent],
  providers: [CustomerService]
})
export class CustomerPageModule {}
