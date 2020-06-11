import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authInfo: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authInfo = this.afAuth.authState;
   }

   login(){
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
     .then((user)=> {console.log(user); });
   }

   logout(){
     this.afAuth.auth.signOut().then(()=> { console.log('logged out') });
   }
}
