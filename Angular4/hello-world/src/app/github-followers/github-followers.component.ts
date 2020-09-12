import { GithubFollowersService } from '../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers;
  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe(queryparams => {
        const page = queryparams.get('page');
        const order = queryparams.get('order');
        console.log('page: ' + page + ' order: ' + order);
      });
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
