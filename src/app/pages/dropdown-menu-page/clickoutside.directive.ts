import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Inject,
  AfterViewInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { Subscription, filter, fromEvent } from 'rxjs';

// @Directive({
//   selector: '[clickOutside]',
//   standalone: true,
// })
// export class ClickOutsideDirective {
//   @Output() clickOutside = new EventEmitter<void>();

//   @HostListener('document:click', ['$event.target'])
//   public onClick(targetElement: HTMLElement) {
//     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
//     if (!clickedInside) {
//       this.clickOutside.emit();
//     }
//   }

//   constructor(private elementRef: ElementRef) {}
// }

/**
 * Older version
 */
@Directive({
  selector: '[clickOutside]',
  //   host: {
  //     '(document:click)': 'onClick($event)',
  //   },
  standalone: true,
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter<void>();
  subscription: Subscription | undefined;
  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit(): void {
    this.subscription = fromEvent(this.document, 'click')
      .pipe(
        filter((event) => {
          return !this.isInside(event.target as HTMLElement);
        })
      )
      .subscribe(() => {
        this.clickOutside.emit();
      });
  }

  isInside(elementToCheck: HTMLElement) {
    return (
      elementToCheck === this.element.nativeElement ||
      this.element.nativeElement.contains(elementToCheck)
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
