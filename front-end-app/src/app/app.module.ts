import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';

//* Для того чтобы работал парсер [(ngModel)]. Пример: <input type="text" [(ngModel)]="name" name="name" placeholder="Введите имя" class="form-control">
import {FormsModule } from '@angular/forms'
//* Добавляем провайлер
import {CheckFormService } from './check-form.service' 
//* Для добавления всплывающих сообщений. npm install angular2-flash-messages --save
import { FlashMessagesModule } from 'angular2-flash-messages';
//* Сервис авторизации
import { AuthService } from './auth.service'
//* Для http отправки на серверную часть NodeJS
import { HttpModule } from '@angular/http';
//* Наш самописный файл для авторизации
import { IsLoggedIn } from './isLogged.guard';


const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reg', component: RegComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [IsLoggedIn]} // если canActivate вернет нам true то переход будет возможен, если нет то нет :-)
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule, // Для того чтобы работал парсер [(ngModel)]. Пример: <input type="text" [(ngModel)]="name" name="name" placeholder="Введите имя" class="form-control">
    FlashMessagesModule.forRoot(),
    HttpModule,
  ],
  providers: [
    CheckFormService,
    AuthService, // Добавляем провайлер и сюда.
    IsLoggedIn
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
