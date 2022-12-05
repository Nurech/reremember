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
    this.userService.currentPage = 'learn';
  }

}

export const learnMap = [
  {},
  {
    items: [
      {
        type: 'regular',
        data: `An interesting challenge for the cryptography community is to design authentication protocols that are so simple that a human can execute them without relying on a fully trusted computer.`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Extensive research shows that many passwords in
use can be easily guessed and that
people reuse passwords across different accounts.`
      }

    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `In order to generate secure passwords, users have to create and remember complex
strings, which often results in forgetting their passwords after a certain period.`
      }

    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Unfortunately, the number of
unique and secure passwords that users can comfortably
memorize is very limited. In an attempt to ameliorate these difficulties, we present several methods to generate and remember passwords better!`
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
        data: `Mindhashes may appear to be an appealing solution to
the problem of remembering different passwords. Whether
such methods are truly usable for most humans is an intriguing open question.`
      }

    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `An example of generating a password using the
3-word mindhash. The top table shows the secret key and
boxes 1-5 show the password generation step by step.`
      },
      {
        type: 'image',
        data: `../../assets/images/mindhash.png`
      }
    ]
  },
  {
    items: [
      {
        type: 'special',
        data: `2. PUBLIC CHALLENGE METHOD`
      },
      {
        type: 'regular',
        data: `In a human computable password management scheme the user
reconstructs each of his passwords by computing the response to a public challenge.`
      }, {
        type: 'regular',
        data: ``
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `The user memorizes a secret mapping σ from n images to digits. Sequence of images is transpiled into a sequence of digits/letters.`
      }
    ]
  },
  {
    items: [
      {
        type: 'image',
        data: `../../assets/images/eagle.png`
      },
      {
        type: 'image',
        data: `../../assets/images/computatedResponse.png`
      }
    ]
  },
  {
    items: [
      {
        type: 'special',
        data: `3. SECURE PASSWORD SCREATION SCHEMA METHOD`
      }, {
        type: 'regular',
        data: `Are there any humanly usable, secure and publishable
password generation methods?`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `A password schema consists of a sample space of al-
lowable challenges called the dictionary and a set of in-
structions for transforming challenges in the dictionary
into passwords.`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Most of our schemas will involve implicit or explicit char-
acter-to-character maps. We write letters of the challenge

as capitals A, B, C... and their map values (A)f, (B)f,
(C)f... as lower-case letters (A)f=a, (B)f=b, (C)f=c.... We

use (A)f instead of f(A) because human computation re-
quires first retrieving A and then applying f.

Our first set of schemas use a letter-to-digit map.`
      }
    ]
  },
  {
    items: [
      {
        type: 'image',
        data: `../../assets/images/schema.png`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `You have reached the end! You can always come back to learn.`
      },
      {
        type: 'special',
        data: `1. MINDHASHES METHOD`
      },
      {
        type: 'special',
        data: `2. PUBLIC CHALLENGE METHOD`
      }, {
        type: 'special',
        data: `3. SECURE PASSWORD SCREATION SCHEMA METHOD`
      }
    ]
  }
];
