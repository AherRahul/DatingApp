import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getuser(+this.route.snapshot.params['id']).subscribe(user => {
      this.user = user;
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertify.error(error);
    });
  }

}
