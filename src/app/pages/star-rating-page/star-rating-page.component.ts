import { Component } from '@angular/core';
import { StarRatingComponent } from '../../star-rating/star-rating.component';

@Component({
  selector: 'app-star-rating-page',
  standalone: true,
  templateUrl: './star-rating-page.component.html',
  styleUrl: './star-rating-page.component.css',
  imports: [StarRatingComponent],
})
export class StarRatingPageComponent {}
