import type { AnalyticsSummaryCardInterface } from '~/shared/interfaces/analytics-summary-card.interface';

export const ANALYTICS_SUMMARY_CARDS_MOCK: AnalyticsSummaryCardInterface[] = [
  {
    id: 1,
    label: 'Total revenue',
    icon: 'dollar-sign',
    data: {
      value: 45.231,
      valueType: 'currency',
      delta: 20.1,
      deltaType: 1,
    },
  },
  {
    id: 2,
    label: 'Active users',
    icon: 'users',
    data: {
      value: 2.543,
      valueType: 'number',
      delta: 15.3,
      deltaType: 1,
    },
  },
  {
    id: 3,
    label: 'Conversion rate',
    icon: 'trending-up',
    data: {
      value: 3.24,
      valueType: 'percentage',
      delta: 2.5,
      deltaType: -1,
    },
  },
  {
    id: 4,
    label: 'Avg. sessions',
    icon: 'activity',
    data: {
      value: 272200,
      valueType: 'date',
      delta: 8.2,
      deltaType: 1,
    },
  },
];
