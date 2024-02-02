import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit {
  @Input() currentPage = 1;
  @Input() total = 0;
  @Input() limit = 20;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit() {
    const pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, pagesCount);
  }

  range(start: number, end: number): number[] {
    /**
     * Explanation:
     * 1. Create an array of length end which is initially filled with end number of undefined values
     * 2. Use keys() to get the index, map over the index and add some number to it aka start to create a range
     * 3. @example: start = 1, end = 5 => [1, 2, 3, 4]
     * 4. @example: start = 3, end = 7 => [3, 4, 5, 6]
     * 5. @example: start = 5, end = 9 => [5, 6, 7, 8]
     */
    return [...Array(end).keys()].map((i) => i + start);

    /**
     * copilot hack
     */
    // return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  /**
   * copilot hack
   */
  // ngOnChanges() {
  //   const pagesCount = Math.ceil(this.total / this.limit);
  //   this.pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  // }
}
