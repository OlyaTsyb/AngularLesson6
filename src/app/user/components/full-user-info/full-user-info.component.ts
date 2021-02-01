import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../models/User';

@Component({
  selector: 'app-full-user-info',
  templateUrl: './full-user-info.component.html',
  styleUrls: ['./full-user-info.component.css']
})
export class FullUserInfoComponent implements OnInit {
  @Input()
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state as User;
      console.log(this.user);
    });
  }

  ngOnInit(): void {
  }

}
