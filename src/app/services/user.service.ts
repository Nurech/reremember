import { Injectable } from '@angular/core';
import { LocalforageService } from './localforage.service';
import { DataService } from './data.service';
import { Common, Item, Learn, Result, Train } from '../ngrx/models/item.model';
import { animals, colors, uniqueNamesGenerator } from 'unique-names-generator';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { learnMap } from '../components/learn/learn.component';
import { trainMap } from '../components/train/train.component';
import { debounce } from 'typescript-debounce-decorator';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userItem: Item = {} as Item;
  userDocSnap: any;
  docRef: any;
  currentPage: string = '';
  docId = '';
  nextDisabled = false;
  prevDisabled = false;

  constructor(private localforageService: LocalforageService,
              private dataService: DataService,
              private toastService: ToastService,
              private router: Router,
              public dialog: MatDialog) {
    this.getStorageData();
  }


  getStorageData() {
    this.localforageService.getItem('userData43251351534').then(docId => {
      console.warn('user docId from storage', docId);
      if (docId === null) {
        this.createItem(); // No user data, create Item for new user
      } else {
        this.docId = docId as string;
        this.getItem(this.docId);
      }
    });
  }

  async getItem(id: string) {
    this.docRef = await this.dataService.getDocRef(id);
    return this.dataService.getDoc(this.docRef).then(item => {
      this.userDocSnap = item;
      this.userItem = item.data() as Item;
      console.warn('item from db: ', item);
    });
  }

  createItem() {
    console.warn('creating new user');
    this.userItem.name = this.generateUserName();
    this.initUserItem();
    this.dataService.addDoc(this.userItem).then((item) => {
      this.docRef = item as any;
      this.docId = item.id;
      console.warn('this.docRef', this.docRef);
      this.set();
    });
  }

  set() {
    this.localforageService.set('userData43251351534', this.docId);
  }

  @debounce(1000)
  update() {
    console.warn('this.userItem', this.userItem);
    this.dataService.updateDoc(this.docRef, this.userItem).then(r => console.log('update ok'));
    this.set();
  }


  generateUserName(): string {
    // With maximum length constraint and random digits
    const username = uniqueNamesGenerator({dictionaries: [colors, animals]}); // red_donkey
    console.log('username', username);
    return username;
  }


  clickClearCache() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {type: 'cache', username: this.userItem.name}
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed');
      if (data?.clearCache === true) {
        this.userItem.name = data;
        this.localforageService.DELETE_ALL();
        console.log('Cache cleared!');
        location.reload();
      }
    });
  }

  clickOnPoints() {
    if (!this.userItem.common.clickedPoints) {
      this.userItem.common.clickedPoints = true;
      this.userItem.common.points += 5;
      this.notify('Yay! You earned 5pts for trying to click stuff', 'success');
      this.update();
    }
  }

  notify(message: string, type: string) {
    if (type === 'success') {
      this.toastService.showSuccess(message);
    }
    if (type === 'fail') {
      this.toastService.showFailure(message);
    }
  }

  editUserName(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {type: 'dialog', username: this.userItem.name}
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed');
      if (data?.username?.length > 0) {
        if (!this.userItem.common.editUserName) {
          this.userItem.common.editUserName = true;
          this.userItem.common.points += 5;
          this.notify('Yay! You earned some points for changing your name. +5 pts', 'success');
        }
        this.userItem.name = data.username;
        this.update();
      }
    });
  }

  getTotalUserPoints() {
    return this.userItem?.common?.points + this.userItem?.train?.points + this.userItem?.learn?.points;
  }

  clickOnMenuLearn() {
    if (!this.userItem.learn.clickedOpen) {
      this.userItem.learn.clickedOpen = true;
      this.userItem.learn.points += 5;
      this.notify('Yay! You earned some points for starting to learn things. +10 pts ', 'success');
      this.update();
    }
    this.router.navigate(['learn']);
  }

  clickOnMenuStatistics() {
    if (!this.userItem.learn.clickedOpen) {
      this.userItem.learn.clickedOpen = true;
      this.userItem.learn.points += 5;
      this.notify('Yay! You earned 5 pts for taking an interest in statistics', 'success');
      this.update();
    }
    this.router.navigate(['stats']);
  }

  isShowFooter() {
    let currentUrl = this.router.url;
    console.warn(['home', 'stats', 'results'].includes(currentUrl.replace(/[^a-zA-Z0-9 ]/g, '')))
    return !['home', 'stats', 'results'].includes(currentUrl.replace(/[^a-zA-Z0-9 ]/g, ''));
  }

  givePagePoint() {
    let item = this.currentPage === 'learn' ? this.userItem.learn : this.userItem.train;
    let pageName = this.currentPage === 'learn' ? 'learning' : 'training';
    if (!item.readPages?.includes(this.getCurrentIndex())) {
      item.readPages?.push(this.getCurrentIndex());
      item.points += 10;
      this.notify('Yay! You earned some points for ' + pageName+'. +10 pts', 'success');
      this.update();
    }
  }

  nextPage() {
    let item = this.currentPage === 'learn' ? this.userItem.learn : this.userItem.train;
    let currIndex = this.getCurrentIndex();

    if (this.currentPage === 'learn') {
      if (currIndex + 1 <= learnMap.length - 1) {
        if (currIndex + 1 === learnMap.length - 1) {
          console.warn('user reached the end of learning');
          item.isDone = true;
        }
        this.givePagePoint();
        this.update();
        item.atPage += 1;
      }
    } else {
      if (currIndex + 1 <= trainMap.length - 1) {
        if (currIndex + 1 === trainMap.length - 1) {
          console.warn('user reached the end of training');
          item.isDone = true;
        }
        this.givePagePoint();
        this.update();
        item.atPage += 1;
      }
    }

  }

  prevPage() {
    let item = this.currentPage === 'learn' ? this.userItem.learn : this.userItem.train;
    let currIndex = item.atPage;
    if (currIndex - 1 >= 0) {
      item.atPage -= 1;
      this.update();
    } else {
      return;
    }
  }

  isTrainingOpen() {
    return this.userItem?.learn?.isDone;
  }

  isResultsOpen() {
    return this.userItem?.train?.isDone && this.userItem?.learn?.isDone;
  }

  isNextDisabled() {
    return this.nextDisabled;
  }

  isPrevDisabled() {
    return this.prevDisabled;
  }

  giveUp() {
    // @ts-ignore
    this.userItem.result[this.currentPage] = this.userItem.result[this.currentPage.replace(/[0-9]/g, '') + '1'];
    this.userItem.train.points -= 25;
    this.nextDisabled = false;
    this.prevDisabled = false;
    this.notify('Oh no! You lost some points because you gave up! -25 pts', 'fail');
    this.update();
  }

  showGiveUp() {
    if (['mindmap2', 'squares2', 'function2'].includes(this.currentPage)) {
      // @ts-ignore
      let currentVal = this.userItem.result[this.currentPage];
      // @ts-ignore
      let prevValue = this.userItem.result[this.currentPage.replace(/[0-9]/g, '') + '1'];
      if (currentVal != prevValue) {
        return true;
      }
    }
    return false;
  }

  private initUserItem() {
    this.userItem.common = {} as Common;
    this.userItem.common.points = 0;
    this.userItem.train = {} as Train;
    this.userItem.train.points = 0;
    this.userItem.train.atPage = 0;
    this.userItem.train.readPages = [];
    this.userItem.learn = {} as Learn;
    this.userItem.learn.points = 0;
    this.userItem.learn.atPage = 0;
    this.userItem.learn.readPages = [];
    this.userItem.result = {} as Result;
    this.userItem.result.mindmap1 = '';
    this.userItem.result.mindmap1Score = 0;
    this.userItem.result.mindmap2 = '';
    this.userItem.result.mindmap2Score = 0;
    this.userItem.result.squares1 = '';
    this.userItem.result.squares1Score = 0;
    this.userItem.result.squares2 = '';
    this.userItem.result.squares2Score = 0;
    this.userItem.result.function1 = '';
    this.userItem.result.function1Score = 0;
    this.userItem.result.function2 = '';
    this.userItem.result.function2Score = 0;

    this.userItem.result.mindmapQ1 = '';
    this.userItem.result.mindmapQ1Score = '';
    this.userItem.result.mindmapQ2 = '';
    this.userItem.result.mindmapQ2Score = '';
    this.userItem.result.mindmapQ3 = '';
    this.userItem.result.mindmapQ3Score = '';

    this.userItem.result.squaresQ1 = '';
    this.userItem.result.squaresQ1Score = '';
    this.userItem.result.squaresQ2 = '';
    this.userItem.result.squaresQ2Score = '';
    this.userItem.result.squaresQ3 = '';
    this.userItem.result.squaresQ3Score = '';

    this.userItem.result.functionQ1 = '';
    this.userItem.result.functionQ1Score = '';
    this.userItem.result.functionQ2 = '';
    this.userItem.result.functionQ2Score = '';
    this.userItem.result.functionQ3 = '';
    this.userItem.result.functionQ3Score = '';
  }

  getCurrentIndex() {
    if (this.currentPage == 'learn') {
      return this.userItem.learn?.atPage;
    } else {
      return this.userItem.train?.atPage;
    }
  }

  getMaxIndex() {
    if (this.currentPage == 'learn') {
      return learnMap.length - 1;
    } else {
      return trainMap.length - 1;
    }
  }

  thanksForVoting() {
    this.userItem.train.points += 5;
    this.notify('Thanks for voting! +5 pts', 'success')
  }
}
