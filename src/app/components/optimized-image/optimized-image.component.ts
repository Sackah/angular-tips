import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-optimized-image',
  templateUrl: './optimized-image.component.html',
  styleUrls: ['./optimized-image.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class OptimizedImageComponent implements AfterViewInit {
  @Input({ required: true }) src: string = '';
  @Input({ required: true }) fallback: string = '';
  @Input() alt: string = '';
  loaded = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const img = this.el.nativeElement.querySelector('img');
    if (img.complete) {
      this.loaded = true;
    }
  }

  onLoad() {
    this.loaded = true;
  }
}
