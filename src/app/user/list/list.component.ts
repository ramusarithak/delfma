import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['profile', 'username', 'email', 'role', 'mobile', 'status', 'action'];
  dataSource: any;
  userData: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(data => {
      console.log("User data", data)
      this.userData = data;
      this.dataSource = data
    })
  }

}
