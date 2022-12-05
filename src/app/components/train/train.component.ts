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

export const trainMap = [
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
        data: `1. MINDHASHES METHOD`
      },
      {
        type: 'regular',
        data: `Remember, mindhashes
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
        cols: ['position', 'word1', 'word2'],
        tableData: [
          {position: 1, word1: 'calculation', word2: 'jest'},
          {position: 2, word1: 'bland', word2: 'bench'},
          {position: 3, word1: 'neglect', word2: 'alarm'},
          {position: 4, word1: 'compliance', word2: 'division'}
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
        cols: ['position', 'word1', 'word2'],
        tableData: [
          {position: 1, word1: 'calculation', word2: 'jest'},
          {position: 2, word1: 'bland', word2: 'bench'},
          {position: 3, word1: 'neglect', word2: 'alarm'},
          {position: 4, word1: 'compliance', word2: 'division'}
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
        type: 'regular',
        data: `Thanks for training with us! Now go and see your results!`
      }
    ]
  }
];
