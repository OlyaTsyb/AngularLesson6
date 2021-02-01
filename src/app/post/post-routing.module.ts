import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {FullPostInfoComponent} from './components/full-post-info/full-post-info.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {
        path: ':id', component: FullPostInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
