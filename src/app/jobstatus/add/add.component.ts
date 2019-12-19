import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobstatusService } from '../jobstatus.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  statusForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<any>, private fb: FormBuilder, private jobService: JobstatusService) { }

  ngOnInit() {
    console.log("edit data", this.data)
    this.statusForm = this.fb.group({
      jobStatus: ['', Validators.required]
    }) 
    if(this.data) {
      this.statusForm.patchValue({
        jobStatus: this.data.jobStatus
      })
    }
  }

  addStatus() {
    this.jobService.addStatus(this.statusForm.value).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      })
    })
    this.dialogRef.close();
  }

  updateStatus() {
    console.log("value", this.statusForm.value)
    this.jobService.updateStatus(this.data.id, this.statusForm.value).subscribe(res => {
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
