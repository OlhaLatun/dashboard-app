import type { UserActionStatus } from '~/shared/enums/user-action-status.enum';

interface UserActivity {
  user: string;
  action: string;
  time: number;
  status: UserActionStatus;
}

export class DashboardTableRow {
  public user: string;
  public action: string;
  public time: number;
  public status: UserActionStatus;

  constructor(data: UserActivity) {
    this.user = data.user;
    this.action = data.action;
    this.time = data.time;
    this.status = data.status;
  }

  public getFormattedTime(): string {
    const now = Date.now();
    const diff = new Date(now - this.time);

    const hours = diff.getHours();
    const minutes = diff.getMinutes();
    const seconds = diff.getSeconds();

    if (hours > 0) {
      return `${hours}d ago`;
    }

    if (minutes > 0) {
      return `${minutes}m ago`;
    }

    if (seconds > 0) {
      return `${seconds}s ago`;
    }

    return 'just now';
  }
}
