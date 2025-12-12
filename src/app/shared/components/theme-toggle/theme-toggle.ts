import { Component, inject } from '@angular/core';
import { Theme } from '../../../core/services/theme';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggle {
  themeService = inject(Theme);

  toggle(): void {
    this.themeService.toggleTheme();
  }
}
