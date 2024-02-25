import { Component } from '@angular/core';
import { IntersectionObserverDirective } from '../../directives/intersection.directive';

@Component({
  selector: 'app-scroll-animation-page',
  standalone: true,
  imports: [IntersectionObserverDirective],
  templateUrl: './scroll-animation-page.component.html',
  styleUrl: './scroll-animation-page.component.css',
})
export class ScrollAnimationPageComponent {}
