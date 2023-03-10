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

  getAllRole() {
    return this.http.get('http://localhost:3000/Role')
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

  isLoggedIn(){
    return sessionStorage.getItem('username')!=null
  }

  getUserRole(){
    return sessionStorage.getItem('userrole')!=null ? sessionStorage.getItem('userrole')?.toString():'';
}
}
