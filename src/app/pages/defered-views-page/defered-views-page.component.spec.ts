import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferedViewsPageComponent } from './defered-views-page.component';

describe('DeferedViewsPageComponent', () => {
  let component: DeferedViewsPageComponent;
  let fixture: ComponentFixture<DeferedViewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferedViewsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferedViewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
