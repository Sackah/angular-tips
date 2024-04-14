import { Component } from '@angular/core';
import { OptimizedImageComponent } from '../../components/optimized-image/optimized-image.component';

@Component({
  selector: 'app-blur-load-page',
  templateUrl: './blur-load-page.component.html',
  styleUrls: ['./blur-load-page.component.css'],
  standalone: true,
  imports: [OptimizedImageComponent],
})
export class BlurLoadPage {}
