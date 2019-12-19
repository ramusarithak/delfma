import { Component, OnInit } from '@angular/core';
import { JobstatusService } from '../jobstatus.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { AddComponent } from '../add/add.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['statusname', 'status', 'action'];
  dataSource;
  searchWord =  new FormControl('')
  dialogRef;
  statusData: any;
  constructor(public dialog: MatDialog, private jobStatusService: JobstatusService) { }

  ngOnInit() {
    this.getAllJobStatus()
  }

  getAllJobStatus() {
    this.jobStatusService.getAllStatus().subscribe(data => {
      console.log("data", data)
      this.statusData = data;
      this.dataSource = data;
    })
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddComponent, {
      width: '500px',
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllJobStatus()
    })
  }

  edit(id) {
    this.jobStatusService.getStatusById(id).subscribe(data => {
      console.log("response", data)
      this.dialogRef = this.dialog.open(AddComponent, {
        width: '500px',
        data: data[0]
      });
      this.dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.getAllJobStatus()
      })
    })
  }

  valueChanges(event: KeyboardEvent) {
    console.log("event", event, event.keyCode > 65)
    let inp = this.searchWord.value.replace(/\s/g, "").toLowerCase()
    if (event.keyCode > 65 && event.keyCode < 95) {
      this.dataSource = this.dataSource.filter((data) => {
        let search = data.jobStatus.replace(/\s/g, "").toLowerCase()
        console.log("search name", search)
        for (var i = 0; i < search.length; i++) {
          console.log("---", search.charAt(i))
          if (search.charAt(i) == event.key) {
            return data;
          }
        }
      })
    } else if(event.keyCode == 8) {
      this.dataSource = this.statusData
      console.log("values", this.searchWord.value)
      if(inp) {
        for(var j=0;j<this.searchWord.value.length;j++) {
          this.dataSource = this.dataSource.filter((data) => {
            let search = data.jobStatus.replace(/\s/g, "").toLowerCase()
            console.log("search name", search)
            for (var i = 0; i < search.length; i++) {
              console.log("---", search.charAt(i))
              if (search.charAt(i) == inp.charAt(j)) {
                return data;
              }
            }
          })
        }  
      }
    }

  }

  delete(id) {
    console.log("delete id", id)
    this.jobStatusService.deleteStatus(id).subscribe(res => {
      console.log("response", res)
      this.getAllJobStatus()
    })
  }

  activeRole(id) {
    this.jobStatusService.activeStauts(id).subscribe(res => {
      console.log("response", res)
      this.getAllJobStatus()
    })
  }

}
