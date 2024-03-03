import { Component } from '@angular/core';
import { months, days } from './static';
import { handleNext, handlePrev, generateWeekDays } from './utils';

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.css',
})
export class SchedulePageComponent {
  viewmode: 'day' | 'week' | 'month' | 'year' = 'week';
  today = new Date();
  date = new Date();
  months = months;
  days = days;
  w_fill = Array(7 * 9).fill(0);
  t_fill = Array(9).fill(0);

  ngOnInit() {
    this.setToday();
  }

  setToday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    this.date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + diff
    );
  }

  handleNext() {
    this.date = handleNext(this.date, this.viewmode);
  }
  handlePrev() {
    this.date = handlePrev(this.date, this.viewmode);
  }

  generateWeekDays() {
    return generateWeekDays(this.date);
  }
}
