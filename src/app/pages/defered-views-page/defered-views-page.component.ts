import { Component } from '@angular/core';
import { DeferMainComponent } from '../../defered-views/main/main.component';
import { DirectivesComponent } from '../../directives/directives.component';
import { RouterLink } from '@angular/router';
import { DecoratorsComponent } from '../../decorators/decorators.component';

@Component({
  selector: 'app-defered-views-page',
  standalone: true,
  templateUrl: './defered-views-page.component.html',
  styleUrl: './defered-views-page.component.css',
  imports: [
    DeferMainComponent,
    DirectivesComponent,
    RouterLink,
    DecoratorsComponent,
  ],
})
export class DeferedViewsPageComponent {}
