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
];
