import { Component, OnInit, ViewEncapsulation, OnChanges, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService} from '../services/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute} from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-spadd',
  templateUrl: './spadd.component.html',
  styleUrls: ['./spadd.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpaddComponent implements OnInit {

  step = 0;
  addForm : FormGroup;
  updateData: any;
  id:any;
  imgUrl: any;
  file:any;
  constructor(private fb: FormBuilder, private dashbardService: DashboardService, private _snackBar: MatSnackBar, private router: Router, private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      serviceProviderName: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
      serviceProviderAddress: ['',Validators.required],
      serviceProviderCountry: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
      serviceProviderState: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
      serviceProviderZipCode: ['',[Validators.required]],
      serviceProviderEmail: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      serviceProviderMobileNo: ['',[Validators.required]],
      serviceProviderPhoneNo: ['',[Validators.required,]],
      vat: ['',[Validators.required]],
      serviceProviderContactName: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
      serviceProviderContactAddress: ['',Validators.required],
      serviceProviderContactcountry: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
      serviceProviderContactState: ['',[Validators.required,Validators.pattern('^[a-zA-Z]*')]],
      serviceProviderContactZipcode: ['',[Validators.required]],
      serviceProviderContactEmail: ['',[Validators.required]],
      serviceProviderContactMobile: ['',[Validators.required]],
      // serviceProviderPicture:['',[Validators.required]]
    })
    this.aroute.params.subscribe(params => {
      console.log("params", params)
      if(params.id) {
        this.id = params.id
        this.dashbardService.getByIndSp(params.id).subscribe(res => {
          console.log("response", res)
          this.updateData = res[0]
          this.imgUrl=this.updateData.serviceProviderPicture
          // console.log("service provider ",this.updateData.serviceProviderPicture)
          console.log("response", this.updateData.serviceProviderName)
        
          this.addForm.patchValue({
            serviceProviderName: this.updateData.serviceProviderName,
            serviceProviderAddress: this.updateData.serviceProviderAddress,
            serviceProviderCountry: this.updateData.serviceProviderCountry,
            serviceProviderState: this.updateData.serviceProviderState,
            serviceProviderZipCode: this.updateData.serviceProvidersssZipCode,
            serviceProviderEmail: this.updateData.serviceProviderEmail,
            serviceProviderMobileNo: this.updateData.serviceProviderMobileNo,
            serviceProviderPhoneNo: this.updateData.serviceProviderPhoneNo,
            vat: this.updateData.vat,
            serviceProviderContactName: this.updateData.serviceProviderContactName,
            serviceProviderContactAddress: this.updateData.serviceProviderContactAddress,
            serviceProviderContactcountry: this.updateData.serviceProviderContactcountry,
            serviceProviderContactState: this.updateData.serviceProviderContactState,
            serviceProviderContactZipcode: this.updateData.serviceProviderContactZipcode,
            serviceProviderContactEmail: this.updateData.serviceProviderContactEmail,
            serviceProviderContactMobile: this.updateData.serviceProviderContactMobile,
            // serviceProviderPicture:this.updateData.serviceProviderPicture 
          })
        })
      }
    })
   
  }
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

 




addService() {
  console.log("add service", this.addForm.value);
  var formData = new FormData();
  formData.append('serviceProviderPicture', this.file)
  console.log("fille for",this.file);
  let postData = this.addForm.value

  // postData['serviceProviderId'] = this.id; 

  for(var key in postData) {
    console.log("key --------", key, postData[key])
    formData.append(key, postData[key])
  }
  this.dashbardService.SpAdd(formData).subscribe(res => {
    console.log("response", res)
    this._snackBar.open(res['message'], 'Close', {
      duration: 2000,
    });
    this.addForm.reset()
    this.router.navigate(['spdashboard'])
  })
}

  updateSpDet() {
    console.log("service", this.addForm.value)
    var formData=new FormData();
    formData.append('serviceProviderPicture', this.file)
    console.log("updatefille for",this.file);

    let postData = this.addForm.value
    console.log("post data ----->",postData);
    for(var key in postData) {
      console.log("key --------", key, postData[key])
      formData.append(key, postData[key])
    }

this.dashbardService.updateSp(this.id, formData).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });
      this.router.navigate(['spdashboard/serviceprovider'])
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
