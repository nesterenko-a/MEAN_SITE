# NEW PROJECT steck MEAN #
- https://getbootstrap.com/
- https://getbootstrap.com/docs/4.4/examples/
- ng serve
- ng g service [name]
- ng g component  [name]

## Для добавления всплывающих сообщений https://www.youtube.com/watch?v=HTsYV5HH3OI&t
- npm install angular2-flash-messages --save 
- import { FlashMessagesModule } from 'angular2-flash-messages';
- FlashMessagesModule.forRoot();
- import { FlashMessagesService } from 'angular2-flash-messages';
- private flashMessages: FlashMessagesService 
- this.flashMessages.show("Пароль не введен", {cssClass: "alert-danger",timeout: 4000});
  
