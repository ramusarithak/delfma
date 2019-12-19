import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpdashboardService {

  constructor(private http: HttpClient) { }

  getByUserId(id) {
    return this.http.get(environment.apiUrl + 'getusersbyid/' + id)
  }

  updateProfile(id, data) {
    return this.http.put(environment.apiUrl + 'updateprofile/' + id, data)
  }

  changePassword(data) {
    return this.http.post(environment.apiUrl + 'changepassword/', data)
  }
}
