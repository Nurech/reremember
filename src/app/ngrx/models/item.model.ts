/**
 * Item holds all the data user produces on the site
 */
export interface Item {
  id: string;
  name: string;
  common: Common;
  learn: Learn;
  train: Train;
  result: Result;
}

export interface Common {
  points: number;
  readHomePage: boolean;
  editUserName: boolean;
  clickedPoints: boolean;
}

export interface Learn {
  isDone: boolean;
  points: number;
  clickedOpen: boolean;
  atPage: number;
  readPages: number[];
}

export interface Train {
  isDone: boolean;
  points: number;
  clickedOpen: boolean;
  atPage: number;
  readPages: number[];
}

export interface Result {
  isDone: boolean;
  mindmap1: string;
  mindmap1Score: number;
  mindmap2: string;
  mindmap2Score: number;

  mindmapQ1: string;
  mindmapQ1Score: string;
  mindmapQ2: string;
  mindmapQ2Score: string;
  mindmapQ3: string;
  mindmapQ3Score: string;

  squaresQ1: string;
  squaresQ1Score: string;
  squaresQ2: string;
  squaresQ2Score: string;
  squaresQ3: string;
  squaresQ3Score: string;

  functionQ1: string;
  functionQ1Score: string;
  functionQ2: string;
  functionQ2Score: string;
  functionQ3: string;
  functionQ3Score: string;

  squares1: string;
  squares1Score: number;
  squares2: string;
  squares2Score: number;
  function1: string;
  function1Score: number;
  function2: string;
  function2Score: number;
}
