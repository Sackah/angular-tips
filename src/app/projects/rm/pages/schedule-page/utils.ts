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

export const formatDateRange = (startDate: Date, endDate: Date) => {
  const startTime = startDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const endTime = endDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  // Check if the time range is between 8:00 and 15:00 (inclusive)
  if (startDate.getHours() >= 8 && endDate.getHours() <= 15) {
    return `${startTime} - ${endTime}`;
  } else {
    const formattedStartDate = startDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const formattedEndDate = endDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    return `${formattedStartDate} ${startTime} - ${formattedEndDate} ${endTime}`;
  }
};
