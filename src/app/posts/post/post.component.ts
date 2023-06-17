import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostCard } from 'src/app/models/post-card.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  post: PostCard = {} as PostCard;
  http = inject(HttpClient);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.http.get<PostCard[]>('assets/i18n/es.json').subscribe({
      next: (data) =>
        (this.post = data.find(
          (p) => p.url === this.route.snapshot.params['url']
        )!),
      error: (error) =>
        console.error('Error al cargar el archivo JSON:', error),
    });
  }
}
