import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkexpiredService {

  constructor(private http: HttpClient) { }

  resetLink(token) {
    return this.http.get(environment.apiUrl + 'resendactivationlink/' + token)
  }
}
