import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dachshund-illustration',
  imports: [],
  templateUrl: './dachshund-illustration.html',
  styleUrl: './dachshund-illustration.scss',
})
export class DachshundIllustration {
  scale = input<number>(10); // Default scale of 10x
}
