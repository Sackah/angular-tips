import { Component } from '@angular/core';
import { ScheduleCalendarComponent } from '../../components/schedule-calendar/schedule-calendar.component';
import { CommonModule } from '@angular/common';
import {
  josephSchedule,
  paulSchedule,
} from '../../components/schedule-calendar/static';

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.css',
  imports: [ScheduleCalendarComponent, CommonModule],
})
export class SchedulePageComponent {
  schedule = josephSchedule;

  ngOnInit() {
    this.randomlyReassignSchedule();
  }

  randomlyReassignSchedule() {
    setInterval(() => {
      if (this.schedule === josephSchedule) {
        this.schedule = paulSchedule;
      } else {
        this.schedule = josephSchedule;
      }
    }, 5000);
  }
}
