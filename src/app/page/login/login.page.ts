import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/User';
import { LoginService } from 'src/app/shared/service/login.service';
import Utils from 'src/app/shared/util/Utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  iconPassword: String = "eye-outline"
  typePassword: String = "password"
  router: Router
  loginService: LoginService
  user: User = new User();

  constructor(router: Router, loginService: LoginService) {
    this.router = router
    this.loginService = loginService
  }

  ngOnInit() {
  }

  clickSeePassword() {
    this.iconPassword === "eye-outline" ? this.iconPassword = "eye-off-outline" : this.iconPassword = "eye-outline"
    this.typePassword === "password" ? this.typePassword = "text" : this.typePassword = "password"
  }

  goPage() {
    console.log("page")
    this.router.navigate(['/tabs/lista']);
  }

  login() {
    this.loginService.login(this.user);
  }
}
