import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SkillPage } from './skill.page';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './add/add.component';
import { SkillService } from './skill.service';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
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
  declarations: [SkillPage,ListComponent,AddComponent],
  entryComponents: [
    AddComponent
  ],
  providers: [
    SkillService
  ]
})
export class SkillPageModule {}
