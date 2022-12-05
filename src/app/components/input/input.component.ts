import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import * as zxcvbn from 'zxcvbn';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnDestroy {

  feedback: any;

  constructor(public userService: UserService) {
  }

  @Input() for: any;
  value: any;

  ngOnInit(): void {
    // @ts-ignore
    this.onInput(this.userService.userItem.result[this.for]);
    this.setCurrentPage();
  }

  getValue() {
    // @ts-ignore
    return this.userService.userItem.result[this.for];
  }

  onInput(event: any) {
    this.value = event;
    // @ts-ignore
    this.userService.userItem.result[this.for] = event;
    this.feedback = zxcvbn(this.value);
    console.warn(this.feedback);

    this.userService.nextDisabled = true;

    if (this.for.includes('1')) {
      console.warn('in first test');
      if (this.feedback.score >= 4) {
        this.userService.nextDisabled = false;
        this.userService.prevDisabled = false;
      } else if (this.feedback.score < 4) {
        this.userService.nextDisabled = true;
      }
    } else if (this.for.includes('2')) {
      console.warn('in second test');
      this.userService.nextDisabled = true;
      this.userService.prevDisabled = true;
      if (this.feedback.score >= 4) {
        // @ts-ignore
        let prevValue = this.userService.userItem.result[this.for.replace(/[0-9]/g, '') + '1'];
        console.warn(prevValue);
        // @ts-ignore
        console.warn(this.userService.userItem.result[this.for]);
        // @ts-ignore
        if (prevValue == this.userService.userItem.result[this.for]) {
          this.userService.nextDisabled = false;
          this.userService.prevDisabled = false;
        }
      }
    }

  }

  ngOnDestroy() {
    this.userService.nextDisabled = false;
    this.userService.prevDisabled = false;
  }


  private setCurrentPage() {
    if (this.for) {
      this.userService.currentPage = this.for;
    }
  }
}
