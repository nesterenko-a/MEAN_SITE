import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../check-form.service';
//* Для добавления всплывающих сообщений. npm install angular2-flash-messages --save
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  name: String;
  login: String;
  email: String;
  password: String;

  constructor(
    private checkFrom: CheckFormService,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  userRegisterClick() {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
    };

    if (!this.checkFrom.checkName(user.name)){
      this.flashMessages.show("Имя не введено", {
        cssClass: "alert-danger",
        timeout: 4000
      });  
      return false;  
    } else if (!this.checkFrom.checkLogin(user.login)){
      this.flashMessages.show("Логин не введен", {
        cssClass: "alert-danger",
        timeout: 4000
      });
      return false; 
    } else if (!this.checkFrom.checkEmail(user.email)){
      this.flashMessages.show("Email не введен", {
        cssClass: "alert-danger",
        timeout: 4000
      });      
      return false;
    } else if (!this.checkFrom.checkPassword(user.password)){
      this.flashMessages.show("Пароль не введен", {
        cssClass: "alert-danger",
        timeout: 4000
      });     
      return false;
    } else {
      console.log("Всё введено");
      this.authService.registerUser(user).subscribe(data => {
        if (!data.success){
          this.flashMessages.show(data.msg, {
            cssClass: "alert-danger",
            timeout: 4000
          });
          this.router.navigate(['/reg']);
        } else {
          this.flashMessages.show(data.msg, {
            cssClass: "alert-success",
            timeout: 2000
          });
          this.router.navigate(['/auth']);
        }
      });
      return false;
    }

  }
}
