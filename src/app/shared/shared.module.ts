import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorComponent } from './input-error/input-error.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    InputComponent,
    LabelComponent,
    CheckboxComponent,
    ButtonComponent,
    InputErrorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    CdkTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTooltipModule
  ],
  exports: [
    InputComponent,
    LabelComponent,
    CheckboxComponent,
    ButtonComponent,
    InputErrorComponent,
    ReactiveFormsModule,
    MatMenuModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    CdkTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
