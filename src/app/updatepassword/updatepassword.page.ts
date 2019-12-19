import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateService } from './service/update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.page.html',
  styleUrls: ['./updatepassword.page.scss'],
})
export class UpdatepasswordPage implements OnInit {

  updateForm: FormGroup;
  constructor(private fb: FormBuilder, private updateservice: UpdateService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.updateForm =  this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  updatePassword() {
    console.log("------", this.updateForm.value)
    let password = {
      password : this.updateForm.get('password').value
    }
    this.updateservice.updatePassword(password).subscribe(res => {
      console.log("response", res)
      this.router.navigate(['success'])
      /*this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });*/
    })
  }
}
