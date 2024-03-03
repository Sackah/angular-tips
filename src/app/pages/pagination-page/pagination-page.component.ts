import { Component } from '@angular/core';
import { PaginationComponent } from '../../pagination/pagination.component';
import { PaginationPrimeComponent } from '../../components/pagination-prime/pagination-prime.component';

@Component({
  selector: 'app-pagination-page',
  standalone: true,
  templateUrl: './pagination-page.component.html',
  styleUrl: './pagination-page.component.css',
  imports: [PaginationComponent, PaginationPrimeComponent],
})
export class PaginationPageComponent {
  currentPage = 1;
  primeCurrent = 1;

  changePage(page: number) {
    this.currentPage = page;
  }
  primeChange(page: number) {
    this.primeCurrent = page;
  }
}
