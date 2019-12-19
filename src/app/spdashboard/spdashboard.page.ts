import { Component, OnInit, ViewEncapsulation, Renderer2, ElementRef } from '@angular/core';
import { Router } from  '@angular/router'

@Component({
  selector: 'app-spdashboard',
  templateUrl: './spdashboard.page.html',
  styleUrls: ['./spdashboard.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class SpdashboardPage implements OnInit {

  name: any;
  role: any;
  constructor(private router: Router, private renderer: Renderer2, private elmRef: ElementRef) { }

  ngOnInit() {
    this.name = localStorage.getItem('name')
    this.role = localStorage.getItem('role')
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('emailId');
    localStorage.removeItem('userId');
    this.router.navigate(['/login'])
  }

  clickSidenav(url) {
    if(url == 'provider') {
      this.router.navigate(['/spdasborad'])
    } else if(url == 'skill') {
      this.router.navigate(['/']) 
    }
  }


}
