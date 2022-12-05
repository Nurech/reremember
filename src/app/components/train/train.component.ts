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
    this.userService.nextDisabled = false;
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
        data: `The user memo-
rizes the letter hash using our method Memorization with

help of words. The idea of this method is the following. The
user looks at each letter pair, e.g., (a, q), and types the first
word that comes to her mind that starts with the first letter
and has the target letter as the next consonant, e.g., aqua.`
      },
      {
        type: 'image',
        data: `../../assets/images/aqua.png`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Now it's your time to practice!`
      },
      {
        type: 'regular',
        data: `Here is your mindmap table I made for you! Try to generate a strong password`
      },
      {
        type: 'table',
        cols:['position', 'word1', 'word2'],
        tableData: [{position: 1, word1: 'calculation', word2: 'jest'},
          {position: 2, word1: 'bland', word2: 'bench'},
          {position: 3, word1: 'neglect', word2: 'alarm'},
          {position: 4, word1: 'compliance', word2: 'division'}]
      },
      {
        type: 'input',
        for: 'mindmap1'
      }

    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Thanks for training with us! Now go and see your results!`
      }
    ]
  },
];
