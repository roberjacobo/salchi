import { Component } from '@angular/core';
import { DachshundIllustration } from '../../../../shared/components/dachshund-illustration/dachshund-illustration';

@Component({
  selector: 'app-hero',
  imports: [DachshundIllustration],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
