import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkexpiredService } from './service/linkexpired.service';

@Component({
  selector: 'app-linkexpired',
  templateUrl: './linkexpired.page.html',
  styleUrls: ['./linkexpired.page.scss'],
})
export class LinkexpiredPage implements OnInit {

  token: any;
  constructor(private aroute: ActivatedRoute, private expiredservice: LinkexpiredService) { }

  ngOnInit() {
    this.aroute.params.subscribe(data => {
      console.log("log data", data)   
      this.token = data.id
    })
  }

  requestLink() {
    console.log("log data", this.token)
    this.expiredservice.resetLink(this.token).subscribe(res => {
      console.log("response", res)
    })
  }

}
