import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/User'

  getAll() {
    return this.http.get(this.apiUrl)
  }

  getByCode(code: any) {
    return this.http.get(this.apiUrl + '/' + code)
  }

  proceedRegister(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata)
  }

  UpdateUser(code: any, inputdata: any) {
    return this.http.put(this.apiUrl + '/' + code, inputdata)
  }
}
