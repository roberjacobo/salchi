import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './features/landing/components/hero/hero';
import { About } from './features/landing/components/about/about';
import { ThemeToggle } from './shared/components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, About, ThemeToggle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('salchi');
}
