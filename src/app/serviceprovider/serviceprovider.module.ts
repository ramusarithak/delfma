import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServiceproviderPage } from './serviceprovider.page';
import { SpaddComponent} from './add/spadd.component';
import { SplistComponent } from './list/splist.component';
import { DashboardService } from './services/dashboard.service';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SplistComponent
  },
  {
    path: 'addsp',
    component: SpaddComponent
  },
  {
    path: 'edit/:id',
    component: SpaddComponent
  },
  {
    path:':id', loadChildren: '../customer/customer.module#CustomerPageModule',
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
    ServiceproviderPage,
    SpaddComponent,
    SplistComponent
  ],
  providers: [
    DashboardService
  ]
})
export class ServiceproviderPageModule {}
