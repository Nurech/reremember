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
    this.userService.currentPage = 'train';
  }

}

export const trainMap: any = [
  {
    items: [
      {
        type: 'special',
        data: `START OF TRAINING`
      },
      {
        type: 'regular',
        data: `Okay we learned 3 different methods to generate secure passwords from our mind. Let's try some of them.`
      }
    ]
  },
  {
    items: [
      {
        type: 'special',
        data: `VALIDATION`
      },
      {
        type: 'regular',
        data: `How you generate secure and rememberable passwords is up to you. However, beware that we compare your password against "zxcvbn" model to verify password strength.  `
      },
      {
        type: 'regular',
        data: `Do not use your real passwords!`
      }
    ]
  },
  {
    items: [
      {
        type: 'special',
        data: `1. MINDMAPS METHOD`
      },
      {
        type: 'regular',
        data: `Remember, mindhashes/mindmaps
require learning, memorization of a secret key, and execution when logging in to an account.`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `The user memorizes the letter hash using our method Memorization with

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
        data: `Here is your mindmap table I made for you! Try to generate a strong password using mindhasing techinique.`
      },
      {
        type: 'table',
        cols: ['word1', 'word2'],
        tableData: [
          {word1: 'calculation', word2: 'jest'},
          {word1: 'bland', word2: 'bench'},
          {word1: 'neglect', word2: 'alarm'},
          {word1: 'compliance', word2: 'division'}
        ]
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
        data: `Good job! I hope you were paying attention. Let's test your selected method. Write the same password again.`
      },
      {
        type: 'table',
        cols: ['word1', 'word2'],
        tableData: [
          {word1: 'calculation', word2: 'jest'},
          {word1: 'bland', word2: 'bench'},
          {word1: 'neglect', word2: 'alarm'},
          {word1: 'compliance', word2: 'division'}
        ]
      },
      {
        type: 'input',
        for: 'mindmap2'
      }

    ]
  },
  {
    items: [
      {
        type: 'question',
        data: {
          label: 'mindmap',
          q: 'Would you use this in practical world?',
          for: 'Q1',
          title: 'MINDMAP METHOD'
        }
      },
      {
        type: 'question',
        data: {
          label: 'mindmap',
          q: 'Do you think this will produce secure passwords?',
          for: 'Q2',
          title: ''
        }
      },
      {
        type: 'question',
        data: {
          label: 'mindmap',
          q: 'How easy is it to produce passwords with this method?',
          for: 'Q3',
          title: ''
        }
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Very nice!!! Now were done with mindmaps. Let's take a look at another method.`
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
        data: `Remember, in a human computable password management scheme the user
reconstructs each of his passwords by computing the response to a public challenge. The user memorizes a secret mapping σ from n images to digits then each challenge
C = (I0, . . . , I13) would correspond to an ordered subset of those images.`
      }
    ]
  },
  {
    items: [
      {
        type: 'special',
        data: `IN A NUT SHELL`
      },
      {
        type: 'regular',
        data: `You are presented a set of images. You have to come up with a way to generate numbers/letters with them. Try looking at patterns these images create. Maybe read images from left->right and up->down. How many numbers should each image generate? Its all up to you.`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Observe the patterns, colors, shapes. Figure out a way to remember how you generated a password with this set.`
      },
      {
        type: 'image',
        data: `../../assets/images/9squares.png`
      },
      {
        type: 'input',
        for: 'squares1'
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `You know the drill. Repeat the password.`
      },
      {
        type: 'image',
        data: `../../assets/images/9squares.png`
      },
      {
        type: 'input',
        for: 'squares2'
      }
    ]
  },
  {
    items: [
      {
        type: 'question',
        data: {
          label: 'squares',
          q: 'Would you use this in practical world?',
          for: 'Q1',
          title: 'CHALLENGE METHOD'
        }
      },
      {
        type: 'question',
        data: {
          label: 'squares',
          q: 'Do you think this will produce secure passwords?',
          for: 'Q2',
          title: ''
        }
      },
      {
        type: 'question',
        data: {
          label: 'squares',
          q: 'How easy is it to produce passwords with this method?',
          for: 'Q3',
          title: ''
        }
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Okay. That was pretty sweet. Ready for the last one?`
      }
    ]
  },
  {
    items: [
      {
        type: 'special',
        data: `3. SECURE PASSWORD CREATION SCHEMA METHOD`
      },
      {
        type: 'regular',
        data: `Rememeber, a password schema consists of a sample space of al-
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
        data: `Okay so the last one may not be that intuitive but, create a custom phonetic alphabet and generate passwords from website names. Remember your own word corresponding to each letter in an alphabet, use the NATO phonetic alphabet as an example.`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Imagine a function (f). We write letters of the challenge

as capitals A, B, C... and their map values (A)f, (B)f,
(C)f... as lower-case letters (A)f=a, (B)f=b, (C)f=c.... We

use (A)f instead of f(A) because human computation re-
quires first retrieving A and then applying f.`
      },
      {
        type: 'input',
        for: 'function1'
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Imagine the same function (f). Try to repeat the password.`
      },
      {
        type: 'input',
        for: 'function2'
      }
    ]
  },
  {
    items: [
      {
        type: 'question',
        data: {
          label: 'function',
          q: 'Would you use this in practical world?',
          for: 'Q1',
          title: 'SCHEMA METHOD'
        }
      },      {
        type: 'question',
        data: {
          label: 'function',
          q: 'Do you think this will produce secure passwords?',
          for: 'Q2',
          title: ''
        }
      },
      {
        type: 'question',
        data: {
          label: 'function',
          q: 'How easy is it to produce passwords with this method?',
          for: 'Q3',
          title: ''
        }
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
  }
];
