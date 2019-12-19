import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  customerAdd(data) {
    return this.http.post(environment.apiUrl + 'customer', data)
  }

  getBySpId(id) {
    return this.http.get(environment.apiUrl + 'getcustomerbyserviceprovider/' + id)
  }

  getCusById(id) {
    return this.http.get(environment.apiUrl + 'getcustomerbyId/' + id)
  }

    updateCustomer(id, data) {
    return this.http.put(environment.apiUrl + 'customer/' + id, data)
  }
  deleteCustomer(id){
    // console.log("service Inside customer id --->",id)

    return this.http.get(environment.apiUrl + 'deletecustomer/' + id)
  }
}
