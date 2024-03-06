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
    projectCode?: string;
    client?: string;
    workHours?: number;
    scheduleId?: number;
    startDate: Date;
    endDate: Date;
  };
}

export const paulSchedule: UserSchedule[] = [
  {
    project: {
      name: 'capstone',
      startDate: new Date('2024-02-26T08:00:00'),
      endDate: new Date('2024-02-26T10:00:00'),
    },
  },
  {
    project: {
      name: 'resource manager',
      startDate: new Date('2024-03-03T08:30:00'),
      endDate: new Date('2024-03-03T09:30:00'),
    },
  },
];

export const josephSchedule: UserSchedule[] = [
  {
    project: {
      name: 'Sapiente',
      projectCode: '5496SA',
      client: 'Gerhold-Blick',
      workHours: 1,
      scheduleId: 46,
      startDate: new Date('2024-03-29T00:00:00+00:00'),
      endDate: new Date('2024-04-05T00:00:00+00:00'),
    },
  },
];
