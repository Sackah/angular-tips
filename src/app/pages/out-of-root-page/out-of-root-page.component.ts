import { Component, inject } from '@angular/core';
import { outOfRootService } from '../../services/out-of-root.service';

@Component({
  selector: 'app-out-of-root-page',
  template: ` <h1>{{ service.message }}</h1> `,
  providers: [outOfRootService],
})
export class OutOfRootPageComponent {
  service = inject(outOfRootService);
}
