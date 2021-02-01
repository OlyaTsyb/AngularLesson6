import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {FullUserInfoComponent} from './components/full-user-info/full-user-info.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [{
      path: ':id', component: FullUserInfoComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
