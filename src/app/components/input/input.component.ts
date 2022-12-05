import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import * as zxcvbn from 'zxcvbn';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  feedback: any;

  constructor(public userService: UserService) {
  }

  @Input() for: any;
  value: any;

  ngOnInit(): void {
    this.userService.nextDisabled = true;
    if (this.for === 'mindmap1') {
      this.value = this.userService?.userItem?.result?.mindmap1;
      if (this.userService?.userItem?.result?.mindmap1Score >= 4) {
        this.userService.nextDisabled = false;
      }
    }
  }

  onInput(event: any) {
    this.value = event;
    this.feedback = zxcvbn(this.value);
    console.warn(this.feedback);
    if (this.for === 'mindmap1') {
      this.userService.userItem.result.mindmap1Score = this.feedback?.score;
      this.userService.userItem.result.mindmap1 = this.value;
      if (this.feedback.score >= 4) {
        this.userService.nextDisabled = false;
      }
    }
  }
}
