import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollAnimationPageComponent } from './scroll-animation-page.component';

describe('ScrollAnimationPageComponent', () => {
  let component: ScrollAnimationPageComponent;
  let fixture: ComponentFixture<ScrollAnimationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollAnimationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollAnimationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
