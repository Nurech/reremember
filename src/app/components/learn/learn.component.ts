import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  learnMap = learnMap;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}

export const learnMap = [
  {id: 0},
  {
    id: 1, items: [
      {
        type: 'regular',
        data: `An interesting challenge for the cryptography community is to design authentication protocols that are so simple that a human can execute them without relying on a fully trusted computer.`
      }
    ]
  },
  {
    id: 2, items: [
      {
        type: 'regular',
        data: `Extensive research shows that many passwords in
use can be easily guessed and that
people reuse passwords across different accounts.`
      }

    ]
  },
  {
    id: 3, items: [
      {
        type: 'regular',
        data: `In order to generate secure passwords, users have to create and remember complex
strings, which often results in forgetting their passwords after a certain period.`
      }

    ]
  },
  {
    id: 4, items: [
      {
        type: 'regular',
        data: `Unfortunately, the number of
unique and secure passwords that users can comfortably
memorize is very limited. In an attempt to ameliorate these difficulties, we present several methods to generate and remember passwords better!`
      }

    ]
  },
  {
    id: 5, items: [
      {
        type: 'special',
        data: `MINDHASHES`
      },
      {
        type: 'regular',
        data: `Mindhashes may appear to be an appealing solution to
the problem of remembering different passwords. Whether
such methods are truly usable for most humans is an intriguing open question`
      }

    ]
  },
  {
    id: 6, items: [
      {
        type: 'regular',
        data: ``
      }
    ]
  },
  {
    id: 7, items: [
      {
        type: 'regular',
        data: ``
      }
    ]
  },
  {
    id: 8, items: [
      {
        type: 'regular',
        data: ``
      }
    ]
  }
];
