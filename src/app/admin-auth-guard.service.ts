import { Observable } from 'rxjs-compat/Observable';
import {UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from '@angular/fire/database';




@Injectable()


export class AdminAuthGuardService implements CanActivate  {

  constructor(private auth: AuthService, private userService: UserService,private db: AngularFireDatabase) { }

   canActivate (): boolean
   {
    
     this.db.object('/user/' + "mtk33Ugxq4gBQpRX2QO2AZXSOY23").valueChanges().subscribe(data=>{
       console.log(data)
     })

      // this.auth.user$.subscribe(data=>{
      //   let res = this.userService.get(data.uid);
      //   console.log(res)
      // })
      this.auth.appUser$.subscribe(data=>{
        console.log(data)
      })
      // user.isAdmin => true 
      return true;
    }
}