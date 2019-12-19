import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JobstatusService {

  constructor(private http: HttpClient) { }

  getAllStatus() {
    return this.http.get(environment.apiUrl + 'getjobstatus')
  }

  getStatusById(id) {
    return this.http.get(environment.apiUrl + 'getjobstatusbyid/' + id)
  }

  addStatus(data) {
    return this.http.post(environment.apiUrl + 'jobstatusinsert', data)
  }

  updateStatus(id, data) {
    return this.http.put(environment.apiUrl + 'jobstatusupdate/' + id, data)
  }

  deleteStatus(id) {
    return this.http.get(environment.apiUrl + 'jobstatusdelete/' + id)
  }

  activeStauts(id) {
    return this.http.get(environment.apiUrl + 'jobstatusactive/' + id)
  }
}
