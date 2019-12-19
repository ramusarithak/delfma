import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyService } from './service/verify.service';

@Component({
  selector: 'app-verifypage',
  templateUrl: './verifypage.page.html',
  styleUrls: ['./verifypage.page.scss'],
})

export class VerifypagePage implements OnInit {

  invalid: any;
  constructor(private aroute: ActivatedRoute, private router: Router, private verifyservice: VerifyService) { }

  ngOnInit() {
    console.log("inside data")
    this.aroute.params.subscribe(data => {
      console.log("log data", data)
      this.verifyservice.verify(data.id).subscribe(res => {
        console.log("response", res)
        if(res['status'] == 1) {
          localStorage.setItem('token', res['token'])
          localStorage.setItem('emailId', res['emailId'])
          localStorage.setItem('name', res['name'])
          this.router.navigate(['updatepassword'])
        } else if(res['status'] == 0) {
          this.router.navigate(['linkexpired/' + res['expiryToken']])
        } else {
          this.invalid = true
        }
      })
    })
  }

}
