import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  trainMap = trainMap;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}

export const trainMap = [
  {
    items: [
      {
        type: 'special',
        data: `START OF TRAINING`
      },
      {
        type: 'regular',
        data: `Okay we learned 3 different method to generate secure passwords from our mind. Let's try some of them.`
      }
    ]
  },
  {
    items: [
      {
        type: 'special',
        data: `1. MINDHASHES METHOD`
      },
      {
        type: 'regular',
        data: `Okay we learned 3 different method to generate secure passwords from our mind. Let's try some of them.`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Imagine`
      },
    ]
  }
];
