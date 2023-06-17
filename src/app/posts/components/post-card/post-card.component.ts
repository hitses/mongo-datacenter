import { Component, Input } from '@angular/core';
import { PostCard } from 'src/app/models/post-card.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() post!: PostCard;
}
