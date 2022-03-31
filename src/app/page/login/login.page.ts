import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  iconPassword: String = "eye-outline"
  typePassword: String = "password"
  router: Router

  constructor(router: Router) {
    this.router = router
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
}
