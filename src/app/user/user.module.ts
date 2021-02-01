import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {FullUserInfoComponent} from './components/full-user-info/full-user-info.component';


@NgModule({
  declarations: [UsersComponent, UserComponent, FullUserInfoComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [UserService]
})
export class UserModule {
}
