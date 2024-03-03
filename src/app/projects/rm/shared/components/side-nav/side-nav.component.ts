import { Component } from '@angular/core';

@Component({
  selector: 'rm-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styles: `.side-nav {
    position: fixed;
    left: 0;
    width: 16%;
    height: 100%;
    border-right: 1px solid #e9eff6;
    font-family: DMSansRegular;
    background-color: var(--bg-primary);
    z-index: 10;
  }`,
})
export class SideNavComponent {}
