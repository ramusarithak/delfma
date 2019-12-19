import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  addUser(data) {
    return this.http.post(environment.apiUrl + 'adduser', data)
  }

  getAllUser() {
    return this.http.get(environment.apiUrl + 'getallusers');
  }

  getAllServiceProvider() {
    return this.http.get(environment.apiUrl + 'getserviceProvider');
  }

  getAllRole() {
    return this.http.get(environment.apiUrl + 'getrole');
  }

  ServiceProIdUsingGetCustomer(id) {
    return this.http.get(environment.apiUrl + 'getcustomerbyserviceprovider/'+id);
  }

  getFacilityByCustomerId(id) {
    return this.http.get(environment.apiUrl + 'getfacilitybycustomer/'+id);
  }

  getByUserId(id) {
    return this.http.get(environment.apiUrl + 'getusersbyid/'+id);    
  }

  updateUser(id, data) {
    return this.http.put(environment.apiUrl + 'updateuser/'+id, data);    
  }

}
