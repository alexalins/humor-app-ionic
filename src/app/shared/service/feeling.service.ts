import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Feeling } from '../model/Feeling';
import { Item } from '../model/Item';

const path = 'my-feeling';

@Injectable({
  providedIn: 'root'
})
export class FeelingService {
  db: AngularFireDatabase

  constructor(db: AngularFireDatabase) {
    this.db = db
  }

  getAllItemFeeling() {
      return this.db.list(path, ref => ref.limitToLast(25)).snapshotChanges().pipe(
          map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...(c.payload.val() as Item) }));
          }
        )
      );
  }

  getAllItemFeelingUser() {
      return this.db.list(path).snapshotChanges().pipe(
          map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...(c.payload.val() as Item)}));
          }
        )
      );
  }
}
