import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { months, days, UserSchedule } from './static';
import {
  handleNext,
  handlePrev,
  generateWeekDays,
  getStartOfWeek,
  getEndOfWeek,
  calculateGridColumn,
} from './utils';

@Component({
  selector: 'app-schedule-calendar',
  standalone: true,
  imports: [],
  templateUrl: './schedule-calendar.component.html',
  styleUrl: './schedule-calendar.component.css',
})
export class ScheduleCalendarComponent implements OnInit, OnChanges {
  @Input() userSchedules: UserSchedule[] = [];
  viewmode: 'day' | 'week' | 'month' | 'year' = 'week';
  today = new Date();
  date = new Date();
  months = months;
  days = days;
  w_fill = Array(7 * 9).fill('💪');

  ngOnInit() {
    this.setToday();
    this.setCurrentSchedule();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userSchedules']) {
      this.setCurrentSchedule();
    }
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

  setCurrentSchedule() {
    if (this.userSchedules.length > 0) {
      this.date = this.userSchedules[0].project.startDate;
    }
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
