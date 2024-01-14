import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { UsersService } from './service/users.service';
import { ActivatedRoute } from '@angular/router';
import { filter, map, takeUntil } from 'rxjs';
import { getPageParams } from './utils/getPageParams';
import { CommonModule } from '@angular/common';
import { onDestroy } from './utils/onDestroy';

@Component({
  selector: 'app-inject-function',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inject-function.component.html',
})
export class InjectFunctionComponent implements OnInit, OnDestroy {
  userService = inject(UsersService);
  destroy$ = onDestroy();

  /**
   * Resolving the observable for this should look something like this:
   * localhost:4200/?page=1
   * <div>
   *  {{ page$ | async }} // should be 1
   * </div>
   */
  page$ = inject(ActivatedRoute).queryParams.pipe(
    // filter the stream if we don't have a query parameter
    filter((params) => params['page']),
    map((params) => params['page'])
  );
  /**
   * This is the same as the page$ observable above, but it's using an external function with
   * injection token
   */
  externalFnPage$ = getPageParams();

  ngOnInit(): void {
    let page;
    this.page$.subscribe((p) => (page = p));
    console.log(page);

    this.userService.getUsers().pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }
}
