import { Injectable, signal, effect, PLATFORM_ID, inject, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Theme implements OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private timeCheckInterval?: ReturnType<typeof setInterval>;

  isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    if (this.isBrowser) {
      this.applyTheme(this.isDarkMode());

      effect(() => {
        const darkMode = this.isDarkMode();
        this.applyTheme(darkMode);
      });

      this.startTimeBasedThemeCheck();
    }
  }

  ngOnDestroy(): void {
    if (this.timeCheckInterval) {
      clearInterval(this.timeCheckInterval);
    }
  }

  toggleTheme(): void {
    this.isDarkMode.update(current => !current);
  }

  setTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);
  }

  private getInitialTheme(): boolean {
    if (!this.isBrowser) {
      return false;
    }

    return this.isWithinDarkModeHours();
  }

  private isWithinDarkModeHours(): boolean {
    const now = new Date();
    const currentHour = now.getHours();

    return currentHour >= 19 || currentHour < 7;
  }

  private startTimeBasedThemeCheck(): void {
    this.timeCheckInterval = setInterval(() => {
      const shouldBeDark = this.isWithinDarkModeHours();
      if (this.isDarkMode() !== shouldBeDark) {
        this.setTheme(shouldBeDark);
      }
    }, 60000);
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
