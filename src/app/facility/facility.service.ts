import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) { }

  addFacility(data) {
    return this.http.post(environment.apiUrl + 'facility', data)
  }

  getFacilityId(id) {
    return this.http.get(environment.apiUrl + 'getfacilitybyId/' + id)
  }

  getAllFacility(id) {
    return this.http.get(environment.apiUrl + 'getfacilitybyId/' + id)
  }

  updateFacility(id, data) {
    return this.http.put(environment.apiUrl + 'facility/' + id, data)
  }

  getFacilityByCustomerId(id) {
    return this.http.get(environment.apiUrl + 'getfacilitybycustomer/' + id)
  }
}
