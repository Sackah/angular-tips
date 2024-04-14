import { Routes } from '@angular/router';
import { DeferedViewsPageComponent } from './pages/defered-views-page/defered-views-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { DropdownMenuPageComponent } from './pages/dropdown-menu-page/dropdown-menu-page.component';
import { PaginationPageComponent } from './pages/pagination-page/pagination-page.component';
import { StarRatingPageComponent } from './pages/star-rating-page/star-rating-page.component';
import { GoodTable } from './computed-signals/good-table/good-table.component';
import { ScrollAnimationPageComponent } from './pages/scroll-animation-page/scroll-animation-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { ProtectedPageComponent } from './pages/protected-page/protected-page.component';
import { authGuard } from './guards/auth.guard';
import { usersResolver } from './guards/users.resolver';
import { OutOfRootPageComponent } from './pages/out-of-root-page/out-of-root-page.component';
import { BlurLoadPage } from './pages/blur-load-page/blur-load-page.component';

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
    path: 'intersection',
    component: ScrollAnimationPageComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'progress',
    component: ProgressPageComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'protected',
    component: ProtectedPageComponent,
    canActivate: [authGuard],
    resolve: { users: usersResolver },
  },
  {
    path: 'out-of-root',
    component: OutOfRootPageComponent,
  },
  {
    path: 'blur-load',
    component: BlurLoadPage,
  },
  {
    path: 'resource-manager',
    loadChildren: () =>
      import('./projects/rm/rm.routes').then((r) => r.RMRoutes),
  },
  {
    path: 'ads',
    loadChildren: () =>
      import('./projects/ads/ads.routes').then((r) => r.ADSRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
