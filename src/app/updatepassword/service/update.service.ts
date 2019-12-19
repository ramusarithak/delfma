import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }

  updatePassword(data) {
    return this.http.post(environment.apiUrl + 'updatepassword', data)
  }
}
