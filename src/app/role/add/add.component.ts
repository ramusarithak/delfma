import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  roleForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private _snackBar: MatSnackBar,  public dialogRef: MatDialogRef<any>, private roleService: RoleService) { }

  ngOnInit() {
    console.log("edit data", this.data)
    this.roleForm = this.fb.group({
      roleName: ['', Validators.required],
    }) 
    if(this.data) {
      this.roleForm.patchValue({
        roleName: this.data.roleName
      })
    }
  }

  addRole() {
    this.roleService.addRole(this.roleForm.value).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      })
    })
    this.dialogRef.close();
  }

  updateRole() {
    console.log("value", this.roleForm.value)
    this.roleService.updateRole(this.data.id, this.roleForm.value).subscribe(res => {
      console.log('response', res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });
      this.dialogRef.close();
    })  
  }

  cancel() {
    this.dialogRef.close();
  }

}
