import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  user;

  login() { console.log('login'); }
  logout() { console.log('logout'); }

  constructor(private auth: AuthService) {
    this.user = auth.authInfo;
   }

}
