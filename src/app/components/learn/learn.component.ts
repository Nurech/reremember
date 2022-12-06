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
      },
      {
        type: 'regular',
        data: `You are expected to choose and remember 3 words, a wildcard character and a sequence containing one
        uppercase letter, one number and one special character.`
      },
      {
        type: 'regular',
        data: `Then you can just use the webpage name to generate a secure password.`
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
        data: `2. PICTURE CHALLENGE METHOD`
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
        data: `3. LETTER-TO-WORD MAPPING METHOD`
      }, {
        type: 'regular',
        data: `Memorize a letter-to-word map - pick and remember a word for each letter from A to Z.`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Lets say You want to generate a password for amazon website and Your words for relevant letters
        are as follows:
        A - aardvark,
        M - mongoose,
        Z - zorillo,
        O - orangutan,
        N - narwhal
        `
      }, {
        type: 'regular',
        data: `Now You just need to come up with a logic which feels logical for to follow.
        For example we could use first 2 consonants from each word (excluding the first letter).`
      }, {
        type: 'regular',
        data: `That way for amazon, we'd get: "rdngrdrlrnrw"`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `To get around password validators requirements, You could come up with a sequence
        containing one capital letter, one number and one special character, which You can append to all
        the passwords you generate. `
      },
      {
        type: 'regular',
        data: `For example: "F3$", which would make the end result for our amazon password: "rdngrdrlrnrwF3$"`
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
        data: `2. PICTURE CHALLENGE METHOD`
      }, {
        type: 'special',
        data: `3. LETTER-TO-WORD MAPPING METHOD`
      }
    ]
  }
];
