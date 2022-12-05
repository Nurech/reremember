import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { trainMap } from '../train/train.component';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {

  value: string = '';
  ratings: number[] = [1, 2, 3, 4, 5, 6, 7];

  @Input() data: any = {} as QuestionData;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    let target = this.data.label + this.data.for;
    // @ts-ignore
    this.value = Number(this.userService.userItem.result[target + 'Score']);
    this.checkDisableStatus();
  }

  checkDisableStatus() {
    this.userService.nextDisabled = false;
    for (let [k, v] of Object.entries(this.userService.userItem.result)) {
      if (k.startsWith(this.data.label + 'Q') && k.endsWith('Score')) {
        console.warn(k);
        if (v === '') {
          this.userService.nextDisabled = true;
        }
      }
    }
  }

  onChange(event: any) {
    console.warn(event.value);
    this.value = event.value;
    let target = this.data.label + this.data.for;

    // @ts-ignore
    if (this.userService.userItem.result[target + 'Score'] === '') {
      this.userService.thanksForVoting();
    }

    // @ts-ignore
    this.userService.userItem.result[target] = this.data.label + ' - ' + this.data.for + ' - ' + this.data.q;
    // @ts-ignore
    this.userService.userItem.result[target + 'Score'] = this.value.toString();
    this.checkDisableStatus();
    this.userService.update();
  }

  ngOnDestroy() {
    this.userService.nextDisabled = false;
  }
}

export interface QuestionData {
  type: string;
  q: string;
  for: string;
  label: string;
  title: string;
}
