import { Component } from '@angular/core';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-pagination-page',
  standalone: true,
  templateUrl: './pagination-page.component.html',
  styleUrl: './pagination-page.component.css',
  imports: [PaginationComponent],
})
export class PaginationPageComponent {
  currentPage = 1;

  changePage(page: number) {
    this.currentPage = page;
  }
}
