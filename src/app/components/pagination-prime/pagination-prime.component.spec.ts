import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPrimeComponent } from './pagination-prime.component';

describe('PaginationPrimeComponent', () => {
  let component: PaginationPrimeComponent;
  let fixture: ComponentFixture<PaginationPrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationPrimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
