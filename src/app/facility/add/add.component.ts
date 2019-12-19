import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FacilityService } from '../facility.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  facilityForm: FormGroup;
  id:any;
  customerId:any;
  editId:any;
  updateData: any;
  constructor(private facilityService: FacilityService, private fb: FormBuilder,
  private aroute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.facilityForm = this.fb.group({
      facilityName: '',
      facilityInitial: '',
      facilityAddress: '',
      facilityCountry: '',
      facilityState: '',
      facilityZipCode: '',
      facilityEmail: '',
      facilityMobileNo: '',
    })
    this.aroute.params.subscribe(params => {
      console.log("params", params)
      this.id = params.id;
      this.customerId = params.customerid;
      this.editId = params.editid;
      if(this.editId) {
        this.facilityService.getFacilityId(this.editId).subscribe(data => {
          this.updateData = data[0];
          console.log("data", this.updateData)
          this.facilityForm.patchValue({
            facilityName: this.updateData.facilityName,
            facilityInitial: this.updateData.facilityInitial,
            facilityAddress: this.updateData.facilityAddress,
            facilityCountry: this.updateData.facilityCountry,
            facilityState: this.updateData.facilityState,
            facilityZipCode: this.updateData.facilityZipCode,
            facilityEmail: this.updateData.facilityEmail,
            facilityMobileNo: this.updateData.facilityMobileNo,
          })
        })
      }
    })
  }

  addFacility() {
    console.log("add customer", this.facilityForm.value);
    let postData = this.facilityForm.value;
    postData['serviceProviderId'] = this.id;
    postData['customerId'] = this.customerId
    this.facilityService.addFacility(postData).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      })
      this.facilityForm.reset()
      this.router.navigate(['/spdashboard/serviceprovider/'+this.id+'/'+this.customerId])
    })
  }

  updateFacility() {
    let postData = this.facilityForm.value;
    postData['serviceProviderId'] = this.id;
    postData['customerId'] = this.customerId
    this.facilityService.updateFacility(this.editId, postData).subscribe(res => {
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });
      this.router.navigate(['/spdashboard/serviceprovider/'+this.id+'/'+this.customerId])
    })
  }

}
