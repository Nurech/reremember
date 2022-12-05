import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  constructor(public userService: UserService) { }

  getRouterLink() {
    if (this.userService.getMaxIndex() === this.userService.getCurrentIndex() && this.userService.currentPage === 'learn') {
      return ['/train'];
    } else if (this.userService.getMaxIndex() === this.userService.getCurrentIndex() && this.userService.currentPage === 'train') {
      return ['/results'];
    } else {
      return null;
    }
  }

  getEndButtonTxt() {
    if (this.userService.getMaxIndex() === this.userService.getCurrentIndex() && this.userService.currentPage === 'learn') {
      return 'Done! Train?';
    } else if (this.userService.getMaxIndex() === this.userService.getCurrentIndex() && (this.userService.currentPage === 'train' || this.userService.currentPage !== 'learn')) {
      return 'Done! Results?';
    } else {
      return 'Next';
    }
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
