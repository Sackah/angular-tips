import { Component } from '@angular/core';
import { DeferChildComponent } from '../child/child.component';

@Component({
  selector: 'defer-main',
  standalone: true,
  imports: [DeferChildComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class DeferMainComponent {
  isVisible = false;
  prefetchCondition = false;
}
