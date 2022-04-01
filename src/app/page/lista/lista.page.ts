import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Feeling } from 'src/app/shared/model/Feeling';
import { Item } from 'src/app/shared/model/Item';
import { FeelingService } from 'src/app/shared/service/feeling.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  feelingService: FeelingService
  items: Item[] = [];

  constructor(feelingService: FeelingService) { 
    this.feelingService = feelingService
  }

  ngOnInit() {
    this.getAllFeeling()
  }


  getAllFeeling() {
    let item: Observable<any>;
    item = this.feelingService.getAllItemFeeling();
    item.subscribe(data =>{
      this.items = data
      this.items = this.items.reverse()
    })
  }
  
}
