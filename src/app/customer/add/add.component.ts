import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  customerForm: FormGroup;
  id: any;
  editid: any;
  updateData: any;
  imgUrl:any;
  file: any;
  constructor(private customerService: CustomerService, private fb: FormBuilder,
  private aroute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      customerName: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
      customerInitial: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
      customerVatNo: ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{11}$')]],
      customerAddress: ['',[Validators.required]],
      customerCountry: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
      customerPhoneNo: ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      customerZipCode: ['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      customerState: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
      customerEmail: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    })
    this.aroute.params.subscribe(params => {
      console.log("params", params)
      this.id = params.id;
      this.editid = params.editid;
      if(this.editid) {
        this.customerService.getCusById(this.editid).subscribe(data => {
          this.updateData = data[0];
          this.imgUrl=this.updateData.customerPicture
          console.log("data", this.updateData)
          this.customerForm.patchValue({
            customerName: this.updateData.customerName,
            customerInitial: this.updateData.customerInitial,
            customerVatNo: this.updateData.customerVatNo,
            customerAddress: this.updateData.customerAddress,
            customerCountry: this.updateData.customerCountry,
            customerPhoneNo: this.updateData.customerPhoneNo,
            customerZipCode: this.updateData.customerZipCode,
            customerState: this.updateData.customerState,
            customerEmail: this.updateData.customerEmail,
          })
        })
      }
    })
  }


  addCustomer() {
    console.log("add customer", this.customerForm.value);
    var formData = new FormData();
    formData.append('customerPicture', this.file)
    console.log("fille for",this.file);
    let postData = this.customerForm.value

    postData['serviceProviderId'] = this.id; 

    for(var key in postData) {
      console.log("key --------", key, postData[key])
      formData.append(key, postData[key])
    }
    this.customerService.customerAdd(formData).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });
      this.customerForm.reset()
      this.router.navigate(['spdashboard'])
    })
  }




  updateCustomer() {
    console.log("service", this.customerForm.value)
    var formData = new FormData();
    formData.append('customerPicture', this.file)
    console.log("updatefille for",this.file);

    let postData = this.customerForm.value
    postData['serviceProviderId'] = this.id; 
    console.log("post data ----->",postData);
    for(var key in postData) {
      console.log("key --------", key, postData[key])
      formData.append(key, postData[key])
    }
    // formData.append('customerName', 'sshakyjfkjd')
    this.customerService.updateCustomer(this.editid, formData).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });
        this.router.navigate(['spdashboard/serviceprovider'+this.id])
    })
  }



   

  imageUpload(event) {
    let that = this;
    console.log("event", event)
    this.file = event.target.files[0]
    var reader = new FileReader()
    reader.onload = function(e) {
      //console.log(e.target.result)
      that.imgUrl = e.target['result']
    }
    reader.readAsDataURL(event.target.files[0])
  }


}
