import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  handleChange(event: any) {
    console.log(event.detail, 'event detail');
  }
  toggleSize(el: HTMLAmalitechSelectElement) {
    el.size = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)] as
      | 'small'
      | 'medium'
      | 'large';
  }
}
