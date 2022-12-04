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
  openUserNameModal: boolean;
  editUserName: boolean;
  clickedPoints: boolean;
  clickedMenu: boolean;
  clickedStatistics: boolean;
}

export interface Learn {
  points: number
  opened: boolean;
}

export interface Train {
  points: number
  opened: boolean;
}
