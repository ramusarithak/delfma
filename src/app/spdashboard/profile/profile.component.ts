import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { SpdashboardService } from '../spdashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  userForm: FormGroup;
  passwordForm: FormGroup
  updateData: any;
  constructor(private _snackBar: MatSnackBar, private fb: FormBuilder, private spdashboardService: SpdashboardService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: '',
      emailId: '',
      mobileNo: '',
    })
    this.passwordForm = this.fb.group({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    this.spdashboardService.getByUserId(localStorage.getItem('userId')).subscribe(data => {
      console.log("data", data)
      this.updateData = data[0]
      this.userForm.patchValue({
        userName: this.updateData.userName,
        emailId: this.updateData.emailId,
        mobileNo: this.updateData.mobileNo,
      })
    })
  }

  updateProfile() {
    this.spdashboardService.updateProfile(localStorage.getItem('userId'), this.userForm.value).subscribe(res => {
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      })
    })
  }

  changePassword() {
    let postData = {
      currentPassword: this.passwordForm.get('currentPassword').value,
      password: this.passwordForm.get('newPassword').value
    }
    this.spdashboardService.changePassword(postData).subscribe(res => {
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      })
      this.passwordForm.reset()
    })
  }

}
