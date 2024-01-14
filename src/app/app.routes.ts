import { Routes } from '@angular/router';
import { DeferedViewsPageComponent } from './pages/defered-views-page/defered-views-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { DropdownMenuPageComponent } from './pages/dropdown-menu-page/dropdown-menu-page.component';

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
];
