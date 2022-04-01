import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shared/model/Item';
import { User } from 'src/app/shared/model/User';
import { FeelingService } from 'src/app/shared/service/feeling.service';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  loginService: LoginService
  feelingService: FeelingService
  router: Router
  items: Item[] = [];
  user: User

  constructor(router: Router, loginService: LoginService, feelingService: FeelingService) {
    this.router = router
    this.loginService = loginService
    this.feelingService = feelingService
  }

  ngOnInit() {
    let json = localStorage.getItem('user');
    this.user = JSON.parse(json);
    this.getMyFeeling()
  }

  getMyFeeling() {
    let myItem: Observable<any>;
    myItem = this.feelingService.getAllItemFeelingUser();
    myItem.subscribe(data =>{
      //depois arrumo isso direito
      for(let item of data) {
        if(item.user.id == this.user.id) {
          this.items.push(item)
        }
      }
      this.items = this.items.reverse()
    })

    
  }

  exit() {
    this.loginService.logout()
  }

  edit() {
    this.router.navigate(['/edit']);
  }

  click() {
    alert("click")
  }
}
