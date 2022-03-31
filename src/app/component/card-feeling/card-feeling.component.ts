import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';

@Component({
  selector: 'app-card-feeling',
  templateUrl: './card-feeling.component.html',
  styleUrls: ['./card-feeling.component.scss'],
})
export class CardFeelingComponent implements OnInit {

  @Input() item: Item = new Item;

  constructor() { }

  ngOnInit() {}

}
