import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShowUsersComponent } from './pages/users/show-users/show-users.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CreateUserComponent } from './User/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUsersComponent,
    NavbarComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
