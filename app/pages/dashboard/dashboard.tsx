import { type JSX } from 'react';
import { ANALYTICS_SUMMARY_CARDS_MOCK } from 'app/mocks/analytics-summary-cards';
import { tableDataMock } from 'app/mocks/table';
import { AnalyticsSummaryCard } from '~/shared/components/analytics-summary-card/analytics-summary-card';
import './dashboard.scss';
import { LinearChart } from '~/components/linear-chart/linear-chart';
import { BarlikeChart } from '~/components/bar-chart/bar-chart';
import { Table } from '~/shared/components/table/table';
import type { Column } from '~/shared/interfaces/table.interfaces';
import { DashboardTableRow } from '~/shared/models/table.models';

export default function Dashboard(): JSX.Element {
  const columns: Column<DashboardTableRow>[] = [
    {
      header: 'User',
      accessor: 'user',
      sortable: true,
    },
    {
      header: 'Action',
      accessor: 'action',
    },
    {
      header: 'Time',
      accessor: 'time',
      sortable: true,
      render: (data) => <span>{data.getFormattedTime()}</span>,
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (data) => (
        <span className={`app-table-status-label ${data.status}`}>{data.status}</span>
      ),
    },
  ];
  return (
    <div>
      <div className="app-dashboard-heading">
        <h1>Dashboard Overview</h1>
        <span>Welcome back! Here&#39;s what&#39;s happening with your analytics platform.</span>
      </div>
      <div className="app-dashboard-cards">
        {ANALYTICS_SUMMARY_CARDS_MOCK.map((card) => (
          <AnalyticsSummaryCard card={card} key={card.id} />
        ))}
      </div>
      <div className="app-dashboard-charts">
        <LinearChart title="Revenue Over Time" description="Monthly revenue comparison" />
        <BarlikeChart title="WeeklyActivity" description="User activity by day" />
      </div>
      <div className="app-dashboard-table">
        <Table
          caption="Recent Activity"
          captionDescription="Latest user actions and events"
          columns={columns}
          data={tableDataMock.map((item) => new DashboardTableRow(item))}
          pagination={true}
          itemsPerPage={5}
        />
      </div>
    </div>
  );
}
