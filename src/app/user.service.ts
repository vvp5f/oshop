import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';


@Injectable()

export class UserService 
{
  constructor(private db: AngularFireDatabase) {}
    save(user: firebase.User)
    {
      this.db.object('/user/' + user.uid).update({
        name: user.displayName, 
        email: user.email
      });
    }
    

    get(uid: string): Observable<any>{
      
    return this.db.object('/user/' + "mtk33Ugxq4gBQpRX2QO2AZXSOY23").valueChanges();
    }
}
