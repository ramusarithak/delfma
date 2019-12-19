import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  SpAdd(data) {
    return this.http.post(environment.apiUrl + 'serviceprovider', data)
  }

  getAllSp() {
    return this.http.get(environment.apiUrl + 'getserviceprovider')
  }

  getByIndSp(id) {
    return this.http.get(environment.apiUrl + 'getserviceproviderbyId/' + id)
  }

  updateSp(id, data) {
    return this.http.put(environment.apiUrl + 'serviceProvider/' + id, data)
  }
  delete(id){
    console.log("idddd",id)
    return this.http.get(environment.apiUrl + 'deleteserviceprovider/' + id)
  }
}
 