import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from '../pages/components/post-list/post-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostListComponent,
    PostCardComponent,
  ],
  imports: [CommonModule, PostsRoutingModule],
  exports: [PostListComponent, PostCardComponent],
})
export class PostsModule {}
