import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostCard } from 'src/app/models/post-card.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  posts!: PostCard[];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<PostCard[]>('assets/i18n/es.json').subscribe({
      next: (data) => (this.posts = data),
      error: (error) =>
        console.error('Error al cargar el archivo JSON:', error),
    });
  }
}
