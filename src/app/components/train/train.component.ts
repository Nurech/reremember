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
        data: `How you generate secure and memorable passwords is up to you. However, beware that we compare your password against "zxcvbn" model to verify password strength.  `
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
        data: `So now it's time for you come up with:`
      },
      {
        type: 'regular',
        data: `1) three word sequence`
      },
      {
        type: 'regular',
        data: `2) a wildcard character`
      },
      {
        type: 'regular',
        data: `3) special character sequence`
      },
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
        data: `Lets say you need to create a password using that approach for reddit.`
      },
      {
        type: 'regular',
        data: `Remember: For every letter present in your word sequence, pick the next letter from your sequence. For missing letters use the wildcard value. And append the special character sequence to the end.`
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
        data: `Good job! I hope you were paying attention. Let's test your selected method. Write the same password again for reddit.`
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
        data: `2. PICTURE CHALLENGE METHOD`
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
        data: `3. LETTER-TO-WORD MAPPING METHOD`
      },
      {
        type: 'regular',
        data: `Remember, a password schema consists of a memorizing a word corresponding to each letter of the alphabet.`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Okay so the last one may not be that intuitive but, create a custom phonetic alphabet and generate passwords from website names. Remember Your own word corresponding to each letter in an alphabet, you can try it out with the NATO phonetic alphabet as an example if You already know it.`
      },
      {
        type: 'regular',
        data: `However, remember that this method is only secure, if You come up with Your own letter-to-word map.`
      }
    ]
  },
  {
    items: [
      {
        type: 'regular',
        data: `Try coming up with a password for reddit using that method!`
      },
      {
        type: 'regular',
        data: `Just to help You get going, the first letter in reddit is r, so remember the word corresponding to r and use the second and input the second and third consonant from that word.`
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
