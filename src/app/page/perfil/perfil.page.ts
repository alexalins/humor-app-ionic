import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shared/model/Item';
import { User } from 'src/app/shared/model/User';
import { FeelingService } from 'src/app/shared/service/feeling.service';
import { LoginService } from 'src/app/shared/service/login.service';
import { UtilsService } from 'src/app/shared/util/utils.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  loginService: LoginService
  feelingService: FeelingService
  util: UtilsService
  router: Router
  items: Item[] = [];
  user: User
  myItem: Observable<any>;

  constructor(router: Router, loginService: LoginService,
     feelingService: FeelingService, util: UtilsService) {
    this.router = router
    this.loginService = loginService
    this.feelingService = feelingService
    this.util = util
  }

  ngOnInit() {
    let json = localStorage.getItem('user');
    this.user = JSON.parse(json);
    this.getMyFeeling()
  }

  getMyFeeling() {
    this.myItem = this.feelingService.getAllItemFeelingUser();
    this.myItem.subscribe(data =>{
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

  removeFeeling(id: string) {
    this.util.alertConfirmDelete(id, this.feelingService)
  }
}
