import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feeling } from 'src/app/model/Feeling';
import { Item } from 'src/app/model/Item';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  router: Router
  list: number[] = [1, 2, 3, 4, 5, 6];
  user: User = {  
    name: "Alexa"
  }

  feeling: Feeling = {  
    name: "Fofa",
    image: "https://firebasestorage.googleapis.com/v0/b/humor-app-7a94a.appspot.com/o/feeling%2Ficone-fofa-cor.png?alt=media&token=d7996d2a-e52a-43dc-a4e4-5f8786806812"
  }

  item: Item = {
    date: '30/03/2022',
    user: this.user,
    feeling: this.feeling
  }

  constructor(router: Router) {
    this.router = router
   }

  ngOnInit() {
  }

  exit() {
    this.router.navigate(['/']);
  }

  edit() {
    
  }
}
