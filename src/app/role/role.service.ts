import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAllRole() {
    return this.http.get(environment.apiUrl + 'getrole')
  }

  addRole(data) {
    return this.http.post(environment.apiUrl + 'roleinsert', data)
  }

  updateRole(id, data) {
    return this.http.put(environment.apiUrl + 'roleupdate/' + id, data)
  }

  getRoleById(id) {
    return this.http.get(environment.apiUrl + 'getrolebyid/' + id)
  }

  delete(id) {
    return this.http.delete(environment.apiUrl + 'roledelete/' + id)
  }

  activeRole(id) {
    return this.http.get(environment.apiUrl + 'active/' + id)
  }
}

