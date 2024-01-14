import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
import { ClickOutsideDirective } from './clickoutside.directive';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { DropdownService } from '../../dropdown/services/dropdown.service';

@Component({
  selector: 'app-dropdown-menu-page',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './dropdown-menu-page.component.html',
  styleUrl: './dropdown-menu-page.component.css',
})
export class DropdownMenuPageComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  clickedOutside() {
    this.isMenuOpen = false;
  }

  private dropdownRef?: ComponentRef<DropdownComponent>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private dropdownService: DropdownService
  ) {}

  openDropdown(event: MouseEvent) {
    const position = { top: event.clientY + 10, left: event.clientX + 10 };
    this.dropdownRef = this.dropdownService.open(
      this.viewContainerRef,
      position
    );
  }
}
