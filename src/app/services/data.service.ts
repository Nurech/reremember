import { Injectable } from '@angular/core';
import { collection, Firestore, onSnapshot, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private db: Firestore) {
    this.startListeningDb();
  }

  startListeningDb() {
    const q = query(collection(this.db, "items"));
    onSnapshot(q, (snapshot) => {
      console.warn(snapshot)
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New item: ", change.doc.data());
        }
        if (change.type === "modified") {
          console.log("Modified item: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed item: ", change.doc.data());
        }
      });
    });
  }

  getItems() {
  }
}
