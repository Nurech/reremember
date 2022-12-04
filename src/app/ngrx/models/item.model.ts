/**
 * Item holds all the data user produces on the site
 */
export interface Item {
  id: string;
  name: string;
  common: Common ;
  learn: Learn;
  train: Train;
}

export interface Common {
  points: number
  readHomePage: boolean;
  editUserName: boolean;
  clickedPoints: boolean;
}

export interface Learn {
  isDone: boolean;
  points: number
  clickedOpen: boolean;
}

export interface Train {
  isDone: boolean;
  points: number
  clickedOpen: boolean;
}
