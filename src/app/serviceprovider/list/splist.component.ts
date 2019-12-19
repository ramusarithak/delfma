import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-splist',
  templateUrl: './splist.component.html',
  styleUrls: ['./splist.component.scss'],
})
export class SplistComponent implements OnInit {

  spData: any
  showData: any;
  searchWord =  new FormControl('')
  displayedColumns: string[] = ['logo', 'name', 'mobile','state','country','action'];
  tableView = false;
  dataSource;
  constructor(private dashboard: DashboardService) { }

  ngOnInit() {
    this.dashboard.getAllSp().subscribe(data => {
      console.log("data", data)
      this.spData = data
      this.dataSource = this.spData;
    })
  }

  deleteSP(id){
    console.log("delete service provider",id)
    this.dashboard.delete(id).subscribe(data=>{
      console.log("data", data)
      // this.spData = data
      // this.dataSource = this.spData;
    })
  }


  valueChanges(event: KeyboardEvent) {
    console.log("event", event, event.keyCode > 65)
    let inp = this.searchWord.value.replace(/\s/g, "").toLowerCase()
    if (event.keyCode > 65 && event.keyCode < 95) {
      this.dataSource = this.dataSource.filter((data) => {
        let search = data.serviceProviderName.replace(/\s/g, "").toLowerCase()
        console.log("search name", search)
        for (var i = 0; i < search.length; i++) {
          console.log("---", search.charAt(i))
          if (search.charAt(i) == event.key) {
            return data;
          }
        }
      })
    } else if(event.keyCode == 8) {
      this.dataSource = this.spData
      console.log("values", this.searchWord.value)
      if(inp) {
        for(var j=0;j<this.searchWord.value.length;j++) {
          this.dataSource = this.dataSource.filter((data) => {
            let search = data.serviceProviderName.replace(/\s/g, "").toLowerCase()
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

    if(inp.length != 0) {
      this.tableView = true;
    } else {
      this.tableView = false;
    }
  }

}
