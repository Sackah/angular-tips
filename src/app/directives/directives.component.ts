import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { StructuralDirective } from './structural.directive';

@Component({
  selector: 'directives-component',
  standalone: true,
  imports: [HighlightDirective, StructuralDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  condition = false;
}
