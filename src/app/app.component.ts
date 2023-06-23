import { Component, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkTheme: boolean = false;

  constructor() {
    const storedTheme = localStorage.getItem('theme');
    this.isDarkTheme = storedTheme === 'dark-theme';
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;

    document.body.classList.toggle('dark-theme', this.isDarkTheme);

    localStorage.setItem(
      'theme',
      this.isDarkTheme ? 'dark-theme' : 'light-theme'
    );
  }
}
