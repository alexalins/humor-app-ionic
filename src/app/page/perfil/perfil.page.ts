import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  router: Router
  constructor(router: Router) {
    this.router = router
   }

  ngOnInit() {
  }

  exit() {
    this.router.navigate(['/']);
  }
}
