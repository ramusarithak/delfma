import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateadminService } from './service/createadmin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.page.html',
  styleUrls: ['./createadmin.page.scss'],
})
export class CreateadminPage implements OnInit {

  adminForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private adminservice: CreateadminService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    let username = window.prompt("Username")
    let password = window.prompt("Password")
    console.log("username", username)
    console.log("passsord", password)
    if(username == "fma" || password =="fma") {

    } else {
      this.router.navigateByUrl('/login')
    }
    this.adminForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
    })
  }

  getAdmin() {
    console.log("---------", this.adminForm.value)
    let postData = {
      userName: this.adminForm.get('username').value,
      emailId: this.adminForm.get('email').value,
      mobileNo: this.adminForm.get('mobile').value
    }
    this.adminservice.register(postData).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      })
      this.adminForm.reset()
    })
  }

}
