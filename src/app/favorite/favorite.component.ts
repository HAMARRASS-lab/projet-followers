import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {

  @Input('is-fav') isSelected: boolean = false;
  @Output('change') click= new EventEmitter();

  isFavorite:boolean=true;
  constructor() { }

  ngOnInit(){
  }

  myFavorite(){
    this.isSelected= !this.isSelected;
    
  }
  
}
