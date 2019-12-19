import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  Remember:boolean
  loginForm: FormGroup
  type: any;
  constructor(private fb: FormBuilder, private loginservice: LoginService, private route: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.type = 'password'
    this.loginForm =  this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      Remember:['']
    })
    if(localStorage.getItem("isRememberMe") == "true" && localStorage.getItem("token")!=null && localStorage.getItem("token")!=undefined){
      
         console.log("inside remember true")
         this.route.navigate(['spdashboard'])
    }
  }
 
  // login() {
  //   console.log("login data", this.loginForm.value)
  //   let postData = {
  //     emailId: this.loginForm.get('username').value,
  //     password: this.loginForm.get('password').value
  //   }
  //   this.loginservice.login(postData).subscribe(res => {
  //     console.log("response", res)
  //     this._snackBar.open(res['message'], 'Close', {
  //       duration: 2000,
  //     });
  //     if(res['status'] == 1) {
  //       this.route.navigate(['spdashboard/serviceprovider'])
  //       localStorage.setItem('userId', res['userId'])
  //       localStorage.setItem('token', res['token'])
  //       localStorage.setItem('name', res['userName'])
  //       localStorage.setItem('emailId', res['emailId'])
  //     }
  //   })
  // }

  login() {
    console.log("login data", this.loginForm.value)
    console.log("rememberme ..",this.loginForm.get('Remember').value);
    let rem=this.loginForm.get('Remember').value;
    console.log("remember value of ",rem);
    if(rem==true){
      localStorage.setItem('isRememberMe', rem)
    }
    let postData = {
      emailId: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }
    this.loginservice.login(postData).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });
      if(res['status'] == 1) {
        this.route.navigate(['spdashboard'])
        localStorage.setItem('userId', res['userId'])
        localStorage.setItem('token', res['token'])
        localStorage.setItem('name', res['userName'])
        localStorage.setItem('emailId', res['emailId'])
      }
             })
            
  }

  togglePass() {
    console.log("toogle")
    this.type == 'password'?this.type = 'text':this.type = 'password';
  }

}
