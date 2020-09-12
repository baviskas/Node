import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  profileId: number;
  profileName: string;
  isUser: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe(combined => {
        this.profileId = +combined[0].get('id');
        this.profileName = combined[0].get('username');
        this.isUser = combined[1].get('isUser');
        console.log(combined);
      });
  }

}
