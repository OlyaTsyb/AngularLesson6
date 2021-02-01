import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-full-user-info',
  templateUrl: './full-post-info.component.html',
  styleUrls: ['./full-post-info.component.css']
})
export class FullPostInfoComponent implements OnInit {
  @Input()
  post: Post;

  constructor(private activatedRouter: ActivatedRoute, private router: Router) {
    this.activatedRouter.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation().extras.state as Post;
    });
  }

  ngOnInit(): void {
  }

}

