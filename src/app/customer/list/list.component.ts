import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  id:any;
  showData: any;
  customerData: any;
  searchWord =  new FormControl('')
  displayedColumns: string[] = ['logo', 'name', 'mobile','state','country','action'];
  tableView = false;
  dataSource;
  constructor(private customerSerive: CustomerService, private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.aroute.params.subscribe(params => {
      this.id = params.id;
      console.log("params", this.id)
      this.customerSerive.getBySpId(this.id).subscribe(data => {
        console.log("get data", data)
        this.customerData = data;
        this.dataSource = this.customerData;
      })
    })
  }
  deleteCP(id){
    console.log("Inside customer id --->",id)
    this.customerSerive.deleteCustomer(id).subscribe(data=>{
      console.log("customer service delete........")
    })
  }
  valueChanges(event: KeyboardEvent) {
    console.log("event", event, event.keyCode > 65)
    let inp = this.searchWord.value.replace(/\s/g, "").toLowerCase()
    if (event.keyCode > 65 && event.keyCode < 95) {
      this.dataSource = this.dataSource.filter((data) => {
        let search = data.customerName.replace(/\s/g, "").toLowerCase()
        console.log("search name", search)
        for (var i = 0; i < search.length; i++) {
          console.log("---", search.charAt(i))
          if (search.charAt(i) == event.key) {
            return data;
          }
        }
      })
    } else if(event.keyCode == 8) {
      this.dataSource = this.customerData
      console.log("values", this.searchWord.value)
      if(inp) {
        for(var j=0;j<this.searchWord.value.length;j++) {
          this.dataSource = this.dataSource.filter((data) => {
            let search = data.customerName.replace(/\s/g, "").toLowerCase()
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
