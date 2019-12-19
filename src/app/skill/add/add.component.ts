import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SkillService } from '../skill.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<any>, private skillService: SkillService) { }

  skillForm: FormGroup;
  ngOnInit() {
    console.log("edit data", this.data)
    this.skillForm = this.fb.group({
      skillName: ['', Validators.required]
    }) 
    if(this.data) {
      this.skillForm.patchValue({
        skillName: this.data.skillName
      })
    }
  }

  addSkill() {
    console.log("value", this.skillForm.value, this.data)
    this.skillService.addSkill(this.skillForm.value).subscribe(res => {
      console.log('response', res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });
      this.dialogRef.close();
    })
  }
  updateSkill() {
    console.log("value", this.skillForm.value)
    this.skillService.updateSkill(this.data.id, this.skillForm.value).subscribe(res => {
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
