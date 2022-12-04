import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  navigate(s: string) {
    if (s === '/learn') {
      this.userService.clickOnMenuLearn();
    }else if (s === '/stats') {
      this.userService.clickOnMenuStatistics();
    } else {
      this.router.navigate([s])
    }
  }
}
