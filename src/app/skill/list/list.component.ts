import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddComponent } from '../add/add.component'
import { SkillService } from '../skill.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['skillname', 'action'];
  dataSource;
  dialogRef;
  searchWord =  new FormControl('')
  skillData: any;
  constructor(public dialog: MatDialog, private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.getAllSkill().subscribe(data => {
      console.log("data", data)
      this.skillData = data;
      this.dataSource = data
    })
  
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddComponent, {
      width: '500px',
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.skillService.getAllSkill().subscribe(data => {
        console.log("data", data);
        this.skillData = data;
        this.dataSource = data
      })
    })
  }

  edit(id) {
    this.skillService.getByIdSkill(id).subscribe(data => {
      console.log("response", data)
      this.dialogRef = this.dialog.open(AddComponent, {
        width: '500px',
        data: data[0]
      });
      this.dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.skillService.getAllSkill().subscribe(data => {
          console.log("data", data)
          this.skillData = data;
          this.dataSource = data
        })
      })
    })
  }

  valueChanges(event: KeyboardEvent) {
    console.log("event", event, event.keyCode > 65)
    let inp = this.searchWord.value.replace(/\s/g, "").toLowerCase()
    if (event.keyCode > 65 && event.keyCode < 95) {
      this.dataSource = this.dataSource.filter((data) => {
        let search = data.skillName.replace(/\s/g, "").toLowerCase()
        console.log("search name", search)
        for (var i = 0; i < search.length; i++) {
          console.log("---", search.charAt(i))
          if (search.charAt(i) == event.key) {
            return data;
          }
        }
      })
    } else if(event.keyCode == 8) {
      this.dataSource = this.skillData
      console.log("values", this.searchWord.value)
      if(inp) {
        for(var j=0;j<this.searchWord.value.length;j++) {
          this.dataSource = this.dataSource.filter((data) => {
            let search = data.skillName.replace(/\s/g, "").toLowerCase()
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


}
