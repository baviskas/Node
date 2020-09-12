import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  // inputs: ['isFavourite']
})
export class FavouriteComponent {
  @Input('is-favourite') isFavourite: boolean;
  @Output('change') click = new EventEmitter();
  constructor() { }
  onClick() {
    this.isFavourite = !this.isFavourite;
    this.click.emit({newValue: this.isFavourite});
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
}
