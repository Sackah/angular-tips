import { Component } from '@angular/core';
import { months, days, paulSchedule } from './static';
import {
  handleNext,
  handlePrev,
  generateWeekDays,
  formatDateRange,
} from './utils';

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
  w_fill!: Date[];
  t_fill = Array(9).fill(0);
  userSchedules = paulSchedule;

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
    this.initializeW_fill();
  }

  initializeW_fill() {
    this.w_fill = Array.from({ length: 7 * 9 }).map((_, index) => {
      const hour = Math.floor(index / 7) + 8; // hours from 8 to 15
      const day = index % 7; // days from 0 (Monday) to 6 (Sunday)
      const date = new Date(this.date);
      date.setDate(date.getDate() + day);
      date.setHours(hour);
      return date;
    });
  }

  handleNext() {
    this.date = handleNext(this.date, this.viewmode);
    this.initializeW_fill();
  }
  handlePrev() {
    this.date = handlePrev(this.date, this.viewmode);
    this.initializeW_fill();
  }

  generateWeekDays() {
    return generateWeekDays(this.date);
  }

  isActive(index: number) {
    const date = this.w_fill[index];

    return this.userSchedules.some(
      (schedule) =>
        date >= schedule.project.start && date <= schedule.project.end
    );
  }

  getProject(index: number) {
    const date = this.w_fill[index];
    const schedule = this.userSchedules.find(
      (schedule) =>
        date >= schedule.project.start && date <= schedule.project.end
    );

    return schedule!.project;
  }

  formatDate(start: Date, end: Date) {
    return formatDateRange(start, end);
  }
}
