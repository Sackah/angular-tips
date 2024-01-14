import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuPageComponent } from './dropdown-menu-page.component';

describe('DropdownMenuPageComponent', () => {
  let component: DropdownMenuPageComponent;
  let fixture: ComponentFixture<DropdownMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownMenuPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
