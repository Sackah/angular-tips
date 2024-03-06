import { UserSchedule } from './static';

export const handlePrev = (
  date = new Date(),
  viewmode: 'day' | 'month' | 'week' | 'year'
) => {
  switch (viewmode) {
    case 'day':
      let newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - 1
      );
      return newDate;
    case 'week':
      let week = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - 7
      );
      return week;
    case 'month':
      let month = new Date(date.getFullYear(), date.getMonth() - 1);
      return month;
    case 'year':
      let year = new Date(
        date.getFullYear() - 1,
        date.getMonth(),
        date.getDate()
      );
      return year;
  }
};

export const handleNext = (
  date = new Date(),
  viewmode: 'day' | 'month' | 'week' | 'year'
) => {
  switch (viewmode) {
    case 'day':
      let newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1
      );
      return newDate;
    case 'week':
      let week = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 7
      );
      return week;
    case 'month':
      let month = new Date(date.getFullYear(), date.getMonth() + 1);
      return month;
    case 'year':
      let year = new Date(
        date.getFullYear() + 1,
        date.getMonth(),
        date.getDate()
      );
      return year;
  }
};

export const generateWeekDays = (date = new Date()) => {
  // starts on Monday
  const firstDayOfWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - date.getDay() + 1
  );

  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    const weekDate = new Date(
      firstDayOfWeek.getTime() + i * 24 * 60 * 60 * 1000
    );

    if (weekDate.getMonth() === firstDayOfWeek.getMonth()) {
      weekDays.push(weekDate);
    } else {
      weekDays.push(weekDate);
    }
  }

  return weekDays;
};

export const getStartOfWeek = (date: Date): Date => {
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay() + 1);
  startOfWeek.setHours(0, 0, 0, 0);
  return startOfWeek;
};

export const getEndOfWeek = (date: Date): Date => {
  const endOfWeek = new Date(date);
  endOfWeek.setDate(date.getDate() + (6 - date.getDay()));
  endOfWeek.setHours(23, 59, 59, 999);
  return endOfWeek;
};

export const calculateGridColumn = (
  project: UserSchedule['project'],
  date: Date
) => {
  const startOfWeek = generateWeekDays(date)[0];
  const endOfWeek = generateWeekDays(date)[6];
  const startDate = new Date(project.startDate);
  const endDate = new Date(project.endDate);

  // move start and end dates to the nearest Monday and Sunday
  const adjustedStartDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() - startDate.getDay() + 1
  );
  const adjustedEndDate = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate() + (6 - endDate.getDay())
  );

  const gridColumnStart = Math.max(
    Math.ceil(
      (adjustedStartDate.getTime() - startOfWeek.getTime()) /
        (1000 * 60 * 60 * 24)
    ),
    1
  );
  const gridColumnEnd = Math.min(
    Math.floor(
      (adjustedEndDate.getTime() - startOfWeek.getTime()) /
        (1000 * 60 * 60 * 24)
    ) + 2,
    8
  );

  return `${gridColumnStart} / ${gridColumnEnd}`;
};
