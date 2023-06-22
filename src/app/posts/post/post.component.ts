import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostCard } from 'src/app/models/post-card.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  jsonPost: PostCard = {} as PostCard;

  url: string = '';
  post: string = '';

  route = inject(ActivatedRoute);
  http = inject(HttpClient);

  ngOnInit() {
    this.url = this.route.snapshot.params['url'];

    this.http.get<PostCard[]>('assets/i18n/es.json').subscribe({
      next: (data) => {
        this.jsonPost = data.find((post) => post.url === this.url)!;
        console.log(this.jsonPost);
      },
      error: (error) =>
        console.error('Error al cargar el archivo JSON:', error),
    });

    // Cargar HTML
    const url = `assets/html/${this.url}.html`;

    fetch(url)
      .then((response) => response.text())
      .then((html) => (this.post = html))
      .catch((error) =>
        console.error('Error al cargar el archivo HTML:', error)
      );
  }
}
