import {Injectable} from '@angular/core';
import * as localforage from 'localforage';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalforageService {

  constructor() {

    localforage.config({
      name: 'reremember - ' + window.location.hostname,
      size: 500 * 1024 * 1024
    });
  }

  getItem(key: string) {
    return localforage.getItem(key);
  }

  get(key: string)  {
    console.warn('localforage',from(localforage.getItem(key)))
    return from(localforage.getItem(key));
  }

  set(key: string, value: any) {
    return from(localforage.setItem(key, value));
  }

  remove(key: string) {
    return from(localforage.removeItem(key));
  }

  DELETE_ALL() {
    return from(localforage.clear());
  }

  listKeys() {
    return from(localforage.keys());
  }

}
