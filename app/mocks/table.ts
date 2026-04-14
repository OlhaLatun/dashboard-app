import { UserActionStatus } from '~/shared/enums/user-action-status.enum';

export const tableDataMock = [
  {
    user: 'Carol White',
    action: 'Deleted data entry',
    time: 3600000,
    status: UserActionStatus.Success,
  },
  {
    user: 'Bob Smith',
    action: 'Updated user settings',
    time: 900000,
    status: UserActionStatus.Success,
  },
  {
    user: 'David Brown',
    action: 'Failed login attempt',
    time: 7200000,
    status: UserActionStatus.Error,
  },
  {
    user: 'Alice Johnson',
    action: 'Created new report',
    time: 120000,
    status: UserActionStatus.Warning,
  },
  {
    user: 'Eve Davis',
    action: 'Exported analytics',
    time: 10800000,
    status: UserActionStatus.Success,
  },

  {
    user: 'Frank Miller',
    action: 'Reset password',
    time: 300000,
    status: UserActionStatus.Warning,
  },
  { user: 'Grace Lee', action: 'Uploaded file', time: 2400000, status: UserActionStatus.Success },
  {
    user: 'Henry Wilson',
    action: 'Deleted account',
    time: 8400000,
    status: UserActionStatus.Error,
  },
  {
    user: 'Isabella Moore',
    action: 'Changed email',
    time: 600000,
    status: UserActionStatus.Success,
  },
  { user: 'Jack Taylor', action: 'Logged out', time: 180000, status: UserActionStatus.Success },

  {
    user: 'Karen Anderson',
    action: 'Added new user',
    time: 4200000,
    status: UserActionStatus.Success,
  },
  {
    user: 'Liam Thomas',
    action: 'Permission denied',
    time: 9600000,
    status: UserActionStatus.Error,
  },
  {
    user: 'Mia Jackson',
    action: 'Viewed dashboard',
    time: 150000,
    status: UserActionStatus.Success,
  },
  {
    user: 'Noah Harris',
    action: 'Session expired',
    time: 5400000,
    status: UserActionStatus.Warning,
  },
  {
    user: 'Olivia Martin',
    action: 'Downloaded report',
    time: 2700000,
    status: UserActionStatus.Success,
  },

  {
    user: 'Paul Thompson',
    action: 'Updated profile',
    time: 3300000,
    status: UserActionStatus.Success,
  },
  {
    user: 'Quinn Garcia',
    action: 'Invalid input error',
    time: 6600000,
    status: UserActionStatus.Error,
  },
  {
    user: 'Ruby Martinez',
    action: 'Connected integration',
    time: 2100000,
    status: UserActionStatus.Success,
  },
  {
    user: 'Sam Robinson',
    action: 'Disconnected service',
    time: 7800000,
    status: UserActionStatus.Warning,
  },
  {
    user: 'Tina Clark',
    action: 'Archived project',
    time: 4500000,
    status: UserActionStatus.Success,
  },
];
