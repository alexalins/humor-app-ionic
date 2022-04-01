import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Feeling } from '../model/Feeling';
import { Item } from '../model/Item';
import { UtilsService } from '../util/utils.service';

const path = 'my-feeling';
const pathFeeling = 'feeling';

@Injectable({
  providedIn: 'root'
})
export class FeelingService {
  db: AngularFireDatabase
  util: UtilsService

  constructor(db: AngularFireDatabase, util: UtilsService) {
    this.db = db
    this.util = util
  }

  getAllItemFeeling() {
    return this.db.list(path, ref => ref.limitToLast(25)).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ id: c.payload.key, ...(c.payload.val() as Item) }));
      }
      )
    );
  }

  getAllItemFeelingUser() {
    return this.db.list(path).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ id: c.payload.key, ...(c.payload.val() as Item) }));
      }
      )
    );
  }

  getAllFeeling() {
    return this.db.list(pathFeeling).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({...(c.payload.val() as Feeling) }));
      }
      )
    );
  }

  newFeeling(item: Item) {
    return new Promise((resolve) => {
      this.db.list(path)
        .push(item)
        .then(() => {
          resolve
          this.util.toast('Sentimento salvo com sucesso');
          return true
        }).catch((erro) => {
          this.util.toast(erro);
          return false
        });
    })
  }

  removeFeeling(id: string) {
    this.db.object(`${path}/${id}`).remove().then(() => {
      this.util.toast('Sentimento apagado');
      window.location.reload()
    }).catch((erro) => {
      this.util.toast(erro)
    });
  }
}
