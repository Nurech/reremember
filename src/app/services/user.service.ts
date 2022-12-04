import { HostListener, Injectable } from '@angular/core';
import { LocalforageService } from './localforage.service';
import { DataService } from './data.service';
import { Common, Item, Learn, Train } from '../ngrx/models/item.model';
import { animals, colors, uniqueNamesGenerator } from 'unique-names-generator';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userItem: Item = {} as Item;
  userDocSnap: any;
  docRef: any;

  constructor(private localforageService: LocalforageService,
              private dataService: DataService,
              private toastService: ToastService,
              private router: Router,
              public dialog: MatDialog) {
    this.getStorageData();

  }

  getStorageData() {
    this.localforageService.getItem('userData43251351534').then(r => {
      console.warn('user data from cache', r);
      if (r === null) {
        // No user data, create Item for new user
        this.createItem();
      } else {
        this.userItem = r as Item;
        if (this.userItem.id) {
          this.getItem(this.userItem.id);
        } else {
          this.createItem();
        }
      }
    });
  }

  async getItem(id: string) {
    this.docRef = await this.dataService.getDocRef(id);
    return this.dataService.getDoc(this.docRef).then(item => {
      this.userDocSnap = item;
      console.warn('item from db: ', item);
      this.userItem = item.data() as Item;
    });
  }

  createItem() {
    console.warn('creating new user');
    this.userItem.name = this.generateUserName();
    this.userItem.common = {} as Common;
    this.userItem.common.points = 0;
    this.userItem.train = {} as Train;
    this.userItem.train.points = 0;
    this.userItem.learn = {} as Learn;
    this.userItem.learn.points = 0;

    this.dataService.addDoc(this.userItem).then((item) => {
      this.docRef = item as any;
      this.userItem.id = item.id;
      console.warn('this.docRef', this.docRef);
      this.set();
    });
  }

  set() {
    this.localforageService.set('userData43251351534', this.userItem);
  }

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
      data: {type: 'cache', username:this.userItem.name}
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
      data: {type: 'dialog', username:this.userItem.name}
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
    return this.userItem.common?.points + this.userItem.train?.points + this.userItem.learn?.points;
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

  isShowFooter() {
    console.warn(this.router.url)
    return this.router.url.includes('learn') || this.router.url.includes('train');
  }
}
