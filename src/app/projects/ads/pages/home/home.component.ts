import { Component, TemplateRef } from '@angular/core';
import { ADSAngularWrapperModule } from '../../../../../../ads-angular-wrapper/src/lib/ads-angular-wrapper.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ADSAngularWrapperModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  handleDateChange(event: any) {
    console.log(event.detail);
  }
}
