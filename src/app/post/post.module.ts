import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostRoutingModule} from './post-routing.module';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import {FullPostInfoComponent} from './components/full-post-info/full-post-info.component';


@NgModule({
  declarations: [PostsComponent, PostComponent, FullPostInfoComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [PostService]
})
export class PostModule {
}
