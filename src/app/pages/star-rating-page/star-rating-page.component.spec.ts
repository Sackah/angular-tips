import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingPageComponent } from './star-rating-page.component';

describe('StarRatingPageComponent', () => {
  let component: StarRatingPageComponent;
  let fixture: ComponentFixture<StarRatingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarRatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
