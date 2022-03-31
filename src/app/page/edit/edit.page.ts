import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  router: Router

  constructor(router: Router) {
    this.router = router
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/tabs/perfil']);
  }

  clickFoto() {
    alert("click foto")
  }
}
