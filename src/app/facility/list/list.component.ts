import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../facility.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  customerId: any;
  displayedColumns: string[] = ['initial', 'name', 'mobile','customername','clientmanager','action'];
  facilityData: any;
  searchWord =  new FormControl('')
  dataSource;
  constructor(private facilityService: FacilityService, private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.aroute.params.subscribe(params => {
      console.log("params", params)
      this.facilityService.getFacilityByCustomerId(params.customerid).subscribe(data => {
        console.log("facility data", data)
        this.facilityData = data;
        this.dataSource = this.facilityData;
      })
    })
    
  }

  valueChanges(event: KeyboardEvent) {
    console.log("event", event, event.keyCode > 65)
    let inp = this.searchWord.value.replace(/\s/g, "").toLowerCase()
    if (event.keyCode > 65 && event.keyCode < 95) {
      this.dataSource = this.dataSource.filter((data) => {
        let search = data.facilityName.replace(/\s/g, "").toLowerCase()
        console.log("search name", search)
        for (var i = 0; i < search.length; i++) {
          console.log("---", search.charAt(i))
          if (search.charAt(i) == event.key) {
            return data;
          }
        }
      })
    } else if(event.keyCode == 8) {
      this.dataSource = this.facilityData;
      console.log("values", this.searchWord.value)
      if(inp) {
        for(var j=0;j<this.searchWord.value.length;j++) {
          this.dataSource = this.dataSource.filter((data) => {
            let search = data.facilityName.replace(/\s/g, "").toLowerCase()
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
