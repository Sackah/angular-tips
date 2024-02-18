import { Routes } from '@angular/router';
import { DeferedViewsPageComponent } from './pages/defered-views-page/defered-views-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { DropdownMenuPageComponent } from './pages/dropdown-menu-page/dropdown-menu-page.component';
import { PaginationPageComponent } from './pages/pagination-page/pagination-page.component';
import { StarRatingPageComponent } from './pages/star-rating-page/star-rating-page.component';
import { GoodTable } from './computed-signals/good-table/good-table.component';

export const routes: Routes = [
  {
    path: '',
    component: DeferedViewsPageComponent,
  },
  {
    path: 'modal',
    component: ModalPageComponent,
  },
  {
    path: 'dropdown',
    component: DropdownMenuPageComponent,
  },
  {
    path: 'pagination',
    component: PaginationPageComponent,
  },
  {
    path: 'star',
    component: StarRatingPageComponent,
  },
  {
    path: 'computed-signals',
    component: GoodTable,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
