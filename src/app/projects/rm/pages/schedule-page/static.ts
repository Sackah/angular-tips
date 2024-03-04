export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export interface UserSchedule {
  project: {
    name: string;
    start: Date;
    end: Date;
  };
}

export const paulSchedule: UserSchedule[] = [
  {
    project: {
      name: 'capstone',
      start: new Date('2024-02-26T08:00:00'),
      end: new Date('2024-02-26T10:00:00'),
    },
  },
  {
    project: {
      name: 'resource manager',
      start: new Date('2024-03-03T08:30:00'),
      end: new Date('2024-03-03T09:30:00'),
    },
  },
];
