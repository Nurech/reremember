import { Injectable } from '@angular/core';
import { collection, Firestore, onSnapshot, query } from '@angular/fire/firestore';
import { LocalforageService } from './localforage.service';
import { Store } from '@ngrx/store';
import { ItemActions } from '../ngrx/items-store';
import { Item } from '../ngrx/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private db: Firestore, private localforageService: LocalforageService, private store$: Store) {
    this.startListeningDb();
  }

  startListeningDb() {
    const q = query(collection(this.db, 'items'));
    onSnapshot(q, (snapshot) => {
      console.warn(snapshot);
      snapshot.docChanges().forEach((change) => {

        let item = {...change.doc.data(), id: change.doc.id} as Item;

        if (change.type === 'added') {
          console.log('New item: ', item);
          this.store$.dispatch(ItemActions.itemReadFromDb({payload: item}));
        }
        if (change.type === 'modified') {
          console.log('Modified item: ', change.doc.data());
        }
        if (change.type === 'removed') {
          console.log('Removed item: ', item);
          this.store$.dispatch(ItemActions.itemRemovedFromDb({payload: item}));
        }
      });
    });
  }

  getItems() {
  }

  clearCache() {
    this.localforageService.DELETE_ALL();
    console.log('Cache cleared!');
  }
}
