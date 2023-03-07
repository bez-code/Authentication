import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

  title = 'Authentication';
  isMenuRequire = false;
  isAdminUser = false;

  constructor(private router: Router, private service:AuthService) {

  }

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    if (currentUrl == '/login' || currentUrl == '/register') {
      this.isMenuRequire = false;
    } else {
      this.isMenuRequire = true;
    }
    if(this.service.getUserRole()==='Admin'){
      this.isAdminUser = true;
    } else {
      this.isAdminUser = false;
    }
  }

}
