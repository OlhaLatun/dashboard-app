export interface AnalyticsSummaryCardInterface {
  id: number;
  label: string;
  icon: string;
  data: {
    value: number;
    valueType: 'number' | 'currency' | 'percentage' | 'text' | 'date';
    delta: number;
    deltaType: 1 | -1;
  };
}
