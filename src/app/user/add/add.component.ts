import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  userForm: FormGroup;
  roleData: any;
  serviceProData: any;
  customerData: any;
  facilityData: any;
  clientManager: Boolean;
  id:any;
  file:any;
  updateData:any;
  imgUrl:any;
  constructor(private aroute: ActivatedRoute, private userService: UserService,private fb: FormBuilder,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userService.getAllRole().subscribe(data => {
      console.log("roll data", data)
      this.roleData = data;
    })
    this.userService.getAllServiceProvider().subscribe(data => {
      console.log("service data", data)
      this.serviceProData = data;
    })
    this.userForm = this.fb.group({
      userName: '',
      emailId: '',
      mobileNo: '',
      address: '',
      country: '',
      state: '',
      zipCode: '',
      phoneNo: '',
      role: '',
      serviceProviderId: '',
      customerId: '',
      facilityId: ''
    })
    this.userForm.get('role').valueChanges.subscribe(value => {
      console.log("value", value);
      if(value == 4) {
        this.clientManager = true;
      } else {
        this.clientManager = false;
      }
    })
      this.userForm.get('serviceProviderId').valueChanges.subscribe(value => {
        console.log("value", value)
        this.userService.ServiceProIdUsingGetCustomer(value).subscribe(data => {
          console.log("customer data", data);
          this.customerData = data;
        })
      })
      this.userForm.get('customerId').valueChanges.subscribe(value => {
        console.log("custome value", value)
        if(this.clientManager == true) {
          this.userService.getFacilityByCustomerId(value).subscribe(data => {
            console.log("facility data", data)
            this.facilityData = data
          })
        }
      })
      this.aroute.params.subscribe(params => {
        this.id = params.id;
        if(this.id) {
          this.userService.getByUserId(this.id).subscribe(data => {
            console.log("user data", data)
            this.updateData = data[0];
            this.imgUrl = this.updateData.profilePicture
            console.log("img url", this.imgUrl)
            this.userForm.patchValue({
              userName: this.updateData.userName,
              emailId: this.updateData.emailId,
              mobileNo: this.updateData.mobileNo,
              address: this.updateData.address,
              country: this.updateData.country,
              state: this.updateData.state,
              zipCode: this.updateData.zipCode,
              phoneNo: this.updateData.phoneNo,
              role: this.updateData.role,
              serviceProviderId: this.updateData.serviceProviderId,
              customerId: this.updateData.customerId,
              facilityId: this.updateData.facilityId
            })
          })
        }
      })
  }

  addUser() {
    console.log("user", this.userForm.value)
    var formData = new FormData();
    formData.append('profilePicture', this.file)
    let postData = this.userForm.value
    for(var key in postData) {
      console.log("key --------", key, postData[key])
      formData.append(key, postData[key])
    }
    this.userService.addUser(formData).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });
      this.userForm.reset()
      this.router.navigate(['spdashboard/user'])
    })
  }

  updateUser() {
    console.log("user", this.userForm.value)
    this.userService.updateUser(this.id, this.userForm.value).subscribe(res => {
      console.log("response", res)
      this._snackBar.open(res['message'], 'Close', {
        duration: 2000,
      });
      this.userForm.reset()
      this.router.navigate(['spdashboard/user'])
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
