import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SpdashboardPage } from './spdashboard.page';
import { SharedModule} from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { SpdashboardService } from './spdashboard.service';

const routes: Routes = [
  {
    path: '',
    component: SpdashboardPage,
    children: [{
      path: 'serviceprovider', loadChildren: '../serviceprovider/serviceprovider.module#ServiceproviderPageModule'
    },{
      path: 'skill', loadChildren: '../skill/skill.module#SkillPageModule', 
    },{
      path: 'user', loadChildren: '../user/user.module#UserPageModule', 
    },{
      path:'role', loadChildren: '../role/role.module#RolePageModule',
    },{
      path:'jobstatus', loadChildren: '../jobstatus/jobstatus.module#JobstatusPageModule',
    },{
      path:'jobpriority', loadChildren: '../jobpriority/jobpriority.module#JobpriorityPageModule',
    },{
      path:'account', component: ProfileComponent,
    }]
  },
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
    SpdashboardPage,
    ProfileComponent 
  ],
  providers: [
    SpdashboardService
  ]
})
export class SpdashboardPageModule {}
