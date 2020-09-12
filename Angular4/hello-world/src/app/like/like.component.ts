import { Component, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  constructor() { }
  @Input('isLiked') isLiked: boolean;
  @Input('likesCount') likesCount: number;
  @Output('onChange') onChange = new EventEmitter();

  onClick = () => {
    let currentLikes = this.likesCount;
    this.isLiked = !this.isLiked;
    this.likesCount = this.isLiked ? ++currentLikes  : --currentLikes;
    this.onChange.emit(this.likesCount);
  }
}
