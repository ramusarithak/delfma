import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  addSkill(data) {
    return this.http.post(environment.apiUrl + 'skill', data)
  }

  getAllSkill() {
    return this.http.get(environment.apiUrl + 'getallskill')
  }

  getByIdSkill(id) {
    return this.http.get(environment.apiUrl + 'getskill/' + id)
  }

  updateSkill(id, data) {
    return this.http.put(environment.apiUrl + 'updateskill/' + id, data) 
  }
}
