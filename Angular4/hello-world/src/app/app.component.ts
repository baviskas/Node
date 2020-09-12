import { Component } from '@angular/core';
import {FavouriteChangedEventArgs} from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 2
  };
  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log('Favourite clicked', eventArgs);
  }
  onLikeChanged(modifiedLikesCount) {
    this.tweet.likesCount = modifiedLikesCount;
    console.log('New Likes count', modifiedLikesCount);
  }
}
