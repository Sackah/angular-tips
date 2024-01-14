import { Component } from '@angular/core';
import { ClickOutsideDirective } from './clickoutside.directive';

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
}
