import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/User';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  router: Router
  user: User
  loginService: LoginService

  constructor(router: Router, loginService: LoginService) {
    this.router = router
    this.loginService = loginService
  }

  ngOnInit() {
    let json = localStorage.getItem('user');
    this.user = JSON.parse(json);
  }

  back() {
    this.router.navigate(['/tabs/perfil']);
  }

  clickFoto() {
    alert("click foto")
  }

  newPassword() {
    this.loginService.newPassword(this.user.email);
  }

  updateUser() {
    this.loginService.updateProfile(this.user)
  }
}
