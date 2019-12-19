import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JobpriorityService {

  constructor(private http: HttpClient) { }

  getAllPrioriry() {
    return this.http.get(environment.apiUrl + 'getjobpriority')
  }

  getPrioriryById(id) {
    return this.http.get(environment.apiUrl + 'getjobprioritybyid/' + id)
  }

  addPrioriry(data) {
    return this.http.post(environment.apiUrl + 'jobpriorityinsert', data)
  }

  updatePrioriry(id, data) {
    return this.http.put(environment.apiUrl + 'jobpriorityupdate/' + id, data)
  }

  deletePrioriry(id) {
    return this.http.get(environment.apiUrl + 'jobprioritydelete/' + id)
  }

  activePrioriry(id) {
    return this.http.get(environment.apiUrl + 'jobpriorityactive/' + id)
  }
}
