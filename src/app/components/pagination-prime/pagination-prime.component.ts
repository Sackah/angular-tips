import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-pagination-prime',
  standalone: true,
  imports: [],
  templateUrl: './pagination-prime.component.html',
  styleUrl: './pagination-prime.component.css',
})
export class PaginationPrimeComponent {
  currentPage = input.required<number>();
  total = input.required<number>();
  limit = input.required<number>();
  @Output() primeChange = new EventEmitter<number>();
  pages = computed(() => {
    const pagesCount = Math.ceil(this.total() / this.limit());
    return Array.from({ length: pagesCount }, (_, i) => i + 1);
  });

  testTransform = input.required<{ key: string }, number>({
    transform: (num) => ({ key: String(num) }),
  });

  ngOnInit() {
    console.log(this.testTransform());
  }
}
