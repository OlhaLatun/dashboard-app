import { type JSX } from 'react';
import { ANALYTICS_SUMMARY_CARDS_MOCK } from 'app/mocks/analytics-summary-cards';
import { AnalyticsSummaryCard } from '~/shared/components/analytics-summary-card/analytics-summary-card';
import './dashboard.scss';
import { LinearChart } from '~/components/linear-chart/linear-chart';
import { BarlikeChart } from '~/components/bar-chart/bar-chart';

export default function Dashboard(): JSX.Element {
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
    </div>
  );
}
