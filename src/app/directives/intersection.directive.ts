import { ElementRef, Directive, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
  exportAs: 'intersection',
  standalone: true,
})
export class IntersectionObserverDirective implements AfterViewInit, OnDestroy {
  public isInterSecting: boolean;

  private elementRef: ElementRef;
  private observer: IntersectionObserver | null = null;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
    this.observer = null;
    this.isInterSecting = false;
  }

  public ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        this.isInterSecting = entries[0].isIntersecting;
      }
    );
    this.observer.observe(this.elementRef.nativeElement);
  }

  public ngOnDestroy() {
    this.observer?.disconnect();
    this.observer = null;
  }
}
