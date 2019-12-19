import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobpriorityService } from '../jobpriority.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  priorityForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<any>, private fb: FormBuilder, private priorityService: JobpriorityService) { }

  ngOnInit() {
    console.log("edit data", this.data)
    this.priorityForm = this.fb.group({
      jobPriority: ['', Validators.required]
    }) 
    if(this.data) {
      this.priorityForm.patchValue({
        jobPriority: this.data.jobPriority
      })
    }
  }

  addPriority() {
    this.priorityService.addPrioriry(this.priorityForm.value).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      })
    })
    this.dialogRef.close();
  }

  updatePriority() {
    console.log("value", this.priorityForm.value)
    this.priorityService.updatePrioriry(this.data.id, this.priorityForm.value).subscribe(res => {
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
