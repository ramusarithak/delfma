import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LinkexpiredPage } from './linkexpired.page';
import { SharedModule } from '../shared/shared.module';
import { LinkexpiredService } from './service/linkexpired.service';

const routes: Routes = [
  {
    path: '',
    component: LinkexpiredPage
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
  declarations: [LinkexpiredPage],
  providers: [
    LinkexpiredService
  ]
})
export class LinkexpiredPageModule {}
