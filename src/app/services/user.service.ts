import { Injectable } from '@angular/core';
import { LocalforageService } from './localforage.service';
import { DataService } from './data.service';
import { Common, Item, Learn, Train } from '../ngrx/models/item.model';
import { animals, colors, uniqueNamesGenerator } from 'unique-names-generator';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { learnMap } from '../components/learn/learn.component';
import { trainMap } from '../components/train/train.component';
import { ngDebounce } from '../utils/debounce';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userItem: Item = {} as Item;
  userDocSnap: any;
  docRef: any;
  currentIndex: number = 0;
  maxIndex: number = 0;
  currentPage: string = '';

  docId = '';

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

  @ngDebounce(2000)
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

  notify(message: string, type: 'success') {
    if (type === 'success') {
      this.toastService.showSuccess(message);
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
          this.notify('Yay! You earned 5pts for changing your name', 'success');
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
      this.notify('Yay! You earned 10 pts for starting to learn things', 'success');
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
    if (this.router.url.includes('learn')) {
      this.maxIndex = learnMap.length - 1;
      this.currentPage = 'learn';
      this.currentIndex = this.userItem?.learn?.atPage;
    } else if (this.router.url.includes('train')) {
      this.maxIndex = trainMap.length - 1;
      this.currentPage = 'train';
      this.currentIndex = this.userItem?.train?.atPage;
    } else {
      this.currentPage = '';
    }
    return this.router.url.includes('learn') || this.router.url.includes('train');
  }

  givePagePoint() {
    let item = this.currentPage === 'learn' ? this.userItem.learn : this.userItem.train;
    if (!item.readPages?.includes(this.currentIndex)) {
      item.readPages?.push(this.currentIndex);
      item.points += 5;
      this.notify('Yay! You earned 10 pts for ' + this.currentPage + 'ing', 'success');
      this.update();
    }
  }

  nextPage() {
    let item = this.currentPage === 'learn' ? this.userItem.learn : this.userItem.train;
    let currIndex = item.atPage;
    if (currIndex + 1 <= learnMap.length - 1) {
      if (currIndex + 1 === learnMap.length - 1) {
        console.warn('user reached the end');
        item.isDone = true;
      }
      this.givePagePoint();
      this.update();
      item.atPage += 1;
    } else {
      return;
    }

  }

  prevPage() {
    let item = this.currentPage === 'learn' ? this.userItem.learn : this.userItem.train;
    let currIndex = item.atPage;
    console.warn(item);
    console.warn(currIndex);
    if (currIndex - 1 >= 0) {
      item.atPage -= 1;
      this.update();
    } else {
      return;
    }
  }

}
