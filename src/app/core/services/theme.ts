import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private readonly THEME_KEY = 'theme-preference';
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    // Only run browser-specific code in browser
    if (this.isBrowser) {
      // Apply theme on initialization
      this.applyTheme(this.isDarkMode());

      // Watch for theme changes and persist them
      effect(() => {
        const darkMode = this.isDarkMode();
        this.applyTheme(darkMode);
        localStorage.setItem(this.THEME_KEY, darkMode ? 'dark' : 'light');
      });
    }
  }

  toggleTheme(): void {
    this.isDarkMode.update(current => !current);
  }

  setTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);
  }

  private getInitialTheme(): boolean {
    // Server-side: default to light mode
    if (!this.isBrowser) {
      return false;
    }

    // Check localStorage first
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved) {
      return saved === 'dark';
    }

    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyTheme(isDark: boolean): void {
    if (!this.isBrowser) {
      return;
    }

    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}
