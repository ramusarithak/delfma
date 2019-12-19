import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/login.guard'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'createadmin', loadChildren: './createadmin/createadmin.module#CreateadminPageModule' },
  { path: 'linkexpired/:id', loadChildren: './linkexpired/linkexpired.module#LinkexpiredPageModule' },
  { path: 'updatepassword', loadChildren: './updatepassword/updatepassword.module#UpdatepasswordPageModule', canActivate: [LoginGuard] },
  { path: 'success', loadChildren: './loginsuccess/loginsuccess.module#LoginsuccessPageModule' },
  { path: 'spdashboard', loadChildren: './spdashboard/spdashboard.module#SpdashboardPageModule', canActivate: [LoginGuard] },
  { path: 'verify/:id', loadChildren: './verifypage/verifypage.module#VerifypagePageModule' },
  { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordPageModule' },
  { path: 'serviceprovider', loadChildren: './serviceprovider/serviceprovider.module#ServiceproviderPageModule' },
  { path: 'role', loadChildren: './role/role.module#RolePageModule' },
  { path: 'jobstatus', loadChildren: './jobstatus/jobstatus.module#JobstatusPageModule' },
  { path: 'jobpriority', loadChildren: './jobpriority/jobpriority.module#JobpriorityPageModule' },
  { path: 'facility', loadChildren: './facility/facility.module#FacilityPageModule' },
 // { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  // { path: 'skill', loadChildren: './skill/skill.module#SkillPageModule' },
  // // { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
