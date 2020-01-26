# NEW PROJECT steck MEAN #
- https://getbootstrap.com/
- https://getbootstrap.com/docs/4.4/examples/
- https://angular.io/guide/
- nodemon (start NodeJS)
- ng serve (start Angular)
- ng g service [name]
- ng g component  [name]

## Для добавления всплывающих сообщений https://www.youtube.com/watch?v=HTsYV5HH3OI
- npm install angular2-flash-messages --save 
- import { FlashMessagesModule } from 'angular2-flash-messages';
- FlashMessagesModule.forRoot();
- import { FlashMessagesService } from 'angular2-flash-messages';
- private flashMessages: FlashMessagesService 
- this.flashMessages.show("Пароль не введен", {cssClass: "alert-danger",timeout: 4000});

## Для отправки сообщений на серверную часть из Angular в NodeJS  https://www.youtube.com/watch?v=Ew_aMmTE35k
- https://angular.io/guide/deprecations#angularhttp
- npm install @angular/http@latest
- import { HttpModule } from '@angular/http';
- return this.http.post(http://localhost:3000/account/reg', user, {headers: headers}).map(res => res.json());

## Для закрытого доступа к странице если ты не авторизован (JWT - JSON WEB TOKEN) https://www.youtube.com/watch?v=LNOZJUJTZWE
- npm install angular2-jwt --save https://www.npmjs.com/package/angular2-jwt
- npm install rxjs-compat --save 