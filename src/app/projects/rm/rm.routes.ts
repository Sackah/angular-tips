import { Route } from '@angular/router';
import { MainComponent } from './main.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';

export const RMRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'schedule',
        component: SchedulePageComponent,
      },
    ],
  },
];
