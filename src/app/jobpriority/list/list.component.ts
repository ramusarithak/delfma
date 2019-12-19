import { Component, OnInit } from '@angular/core';
import {  JobpriorityService } from '../jobpriority.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { AddComponent } from '../add/add.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['priorityname', 'status', 'action'];
  dataSource;
  searchWord =  new FormControl('')
  dialogRef;
  priorityData: any;
  constructor(public dialog: MatDialog, private priorityService: JobpriorityService) { }

  ngOnInit() {
    this.getAllPriority()
  }

  getAllPriority() {
    this.priorityService.getAllPrioriry().subscribe(data => {
      console.log("data", data)
      this.priorityData = data;
      this.dataSource = data;
    })
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddComponent, {
      width: '500px',
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllPriority()
    })
  }

  edit(id) {
    this.priorityService.getPrioriryById(id).subscribe(data => {
      console.log("response", data)
      this.dialogRef = this.dialog.open(AddComponent, {
        width: '500px',
        data: data[0]
      });
      this.dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.getAllPriority()
      })
    })
  }

  valueChanges(event: KeyboardEvent) {
    console.log("event", event, event.keyCode > 65)
    let inp = this.searchWord.value.replace(/\s/g, "").toLowerCase()
    if (event.keyCode > 65 && event.keyCode < 95) {
      this.dataSource = this.dataSource.filter((data) => {
        let search = data.jobPriority.replace(/\s/g, "").toLowerCase()
        console.log("search name", search)
        for (var i = 0; i < search.length; i++) {
          console.log("---", search.charAt(i))
          if (search.charAt(i) == event.key) {
            return data;
          }
        }
      })
    } else if(event.keyCode == 8) {
      this.dataSource = this.priorityData
      console.log("values", this.searchWord.value)
      if(inp) {
        for(var j=0;j<this.searchWord.value.length;j++) {
          this.dataSource = this.dataSource.filter((data) => {
            let search = data.jobPriority.replace(/\s/g, "").toLowerCase()
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
    this.priorityService.deletePrioriry(id).subscribe(res => {
      console.log("response", res)
      this.getAllPriority()
    })
  }

  activeRole(id) {
    this.priorityService.activePrioriry(id).subscribe(res => {
      console.log("response", res)
      this.getAllPriority()
    })
  }

}
