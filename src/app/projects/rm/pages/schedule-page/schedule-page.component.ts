import { Component } from '@angular/core';
import {
  months,
  days,
  paulSchedule,
  UserSchedule,
  josephSchedule,
} from './static';
import {
  handleNext,
  handlePrev,
  generateWeekDays,
  getStartOfWeek,
  getEndOfWeek,
  calculateGridColumn,
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
  w_fill = Array(7 * 9).fill('💪');
  userSchedules = josephSchedule;

  ngOnInit() {
    this.setToday();
  }

  setToday() {
    const dayOfWeek = this.today.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    this.date = new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      this.today.getDate() + diff
    );
  }

  handleNext() {
    this.date = handleNext(this.date, this.viewmode);
    this.getSchedules();
  }
  handlePrev() {
    this.date = handlePrev(this.date, this.viewmode);
    this.getSchedules();
  }

  generateWeekDays() {
    return generateWeekDays(this.date);
  }

  getSchedules() {
    const startOfWeek = getStartOfWeek(this.generateWeekDays()[0]);
    const endOfWeek = getEndOfWeek(this.generateWeekDays()[6]);

    return this.userSchedules.filter((schedule) => {
      const { startDate, endDate } = schedule.project;

      // Check if the project starts and ends within the current week
      if (startDate >= startOfWeek && endDate <= endOfWeek) {
        return true;
      }

      // Check if the project spans multiple weeks
      if (startDate < startOfWeek && endDate > endOfWeek) {
        return true;
      }

      // Check if the project starts or ends within the current week
      if (
        (startDate >= startOfWeek && startDate <= endOfWeek) ||
        (endDate >= startOfWeek && endDate <= endOfWeek)
      ) {
        return true;
      }

      // If none of the above conditions are met, exclude the project
      return false;
    });
  }

  calculateGridColumn(project: UserSchedule['project']) {
    return calculateGridColumn(project, this.date);
  }

  calculateGridRow = (index: number): string => {
    const rowStart = index + 1;
    const rowEnd = rowStart + 1;
    return `${rowStart} / ${rowEnd}`;
  };
}
