import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/User';
import { LoginService } from 'src/app/shared/service/login.service';
import { UtilsService } from 'src/app/shared/util/utils.service';

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
  util: UtilsService
  user: User = new User();

  constructor(router: Router, loginService: LoginService,  util: UtilsService) {
    this.router = router
    this.loginService = loginService
    this.util = util
  }

  loginForm = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", Validators.required),
  });

  ngOnInit() {
    if (this.loginService.isExist()) {
      this.router.navigate(['/tabs/lista']);
    }
  }

  clickSeePassword() {
    this.iconPassword === "eye-outline" ? this.iconPassword = "eye-off-outline" : this.iconPassword = "eye-outline"
    this.typePassword === "password" ? this.typePassword = "text" : this.typePassword = "password"
  }

  login(value) {
    this.util.toast("Carregando...")
    this.user.email = value['email']
    this.user.password = value['password']
    //
    this.loginService.login(this.user);
  }

  newPassword() {
    this.util.alertPassword(this.loginService)
  }
}
