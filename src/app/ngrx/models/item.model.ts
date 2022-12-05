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
  squares1: string;
  squares1Score: number;
  squares2: string;
  squares2Score: number;
}
