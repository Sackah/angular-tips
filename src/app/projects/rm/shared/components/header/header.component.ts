import { Component } from '@angular/core';

@Component({
  selector: 'rm-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: `header {
    position: fixed;
    z-index: 10;
    background-color: var(--bg-primary);
    top: 0;
    right: 0;
    border-bottom: 1px solid #e9eff6;
    width: 84%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }`,
})
export class HeaderComponent {}
