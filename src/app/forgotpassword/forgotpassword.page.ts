import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ForgotService } from './service/forgot.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  forgotForm: FormGroup
  constructor(private fb: FormBuilder, private forgetservice: ForgotService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.forgotForm =  this.fb.group({
      emailId: ['', Validators.required],
    })
  }

  forgot() {
    console.log("forgot value", this.forgotForm.value)
    let postData = {
      emailId: this.forgotForm.get('emailId').value
    }
    this.forgetservice.forgotPassword(postData).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });
      this.forgotForm.reset()
    })
  }


}
