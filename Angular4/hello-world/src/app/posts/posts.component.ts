import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   posts;
   currentPost: string;
  constructor(private service: PostsService) {
  }
  addListItem(item: HTMLInputElement) {
    const post = { title: item.value};
    this.service.create(post).
    subscribe(
      newPost => {
          post['id'] = newPost['id'];
          this.posts = [post, ...this.posts];
      }, (error: AppError) => {
        if (error instanceof BadInput) {
          alert('bad request');
        } else { throw error; }
      }
    );
    item.value = '';
  }
  updatePost(post) {
    const index = this.posts.indexOf(post);
    this.service.update(post)
      .subscribe(
        updatedPost => {
            this.posts[index] = updatedPost;
      });
  }
  deletePost(post) {
    this.service.deleteForId(post.id)
      .subscribe(
        response => {
            const index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
        }, (error: AppError) => {
            if (error instanceof NotFoundError) {
              alert('Post already deleted');
            } else { throw error; }
        }
      );
  }
  getPostById(post: HTMLInputElement) {
    this.service.getPostById(post.value)
      .subscribe(
        postObj => {
          this.currentPost = postObj['title'];
        }, (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('Post Not Found');
          } else { throw error; }
        }
      );
  }
  ngOnInit() {
    this.service.getAll().
    subscribe(posts => this.posts = posts);
  }

}
