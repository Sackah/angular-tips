import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';

export const getPageParams = () => {
  return inject(ActivatedRoute).queryParams.pipe(
    filter((params) => params['page']),
    map((params) => params['page'])
  );
};
