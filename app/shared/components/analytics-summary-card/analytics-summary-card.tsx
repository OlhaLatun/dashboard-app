import { type JSX } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import type { AnalyticsSummaryCardInterface } from '../../interfaces/analytics-summary-card.interface';
import './analytics-summary-card.scss';
import classNames from 'classnames';

export function AnalyticsSummaryCard({
  card,
}: {
  card: AnalyticsSummaryCardInterface;
}): JSX.Element {
  const { icon, label, data } = card;

  const getFormattedValue = (value: number, valueType: string): string => {
    let result = '';
    switch (valueType) {
      case 'number':
      case 'text':
        result = value.toString();
        break;
      case 'currency':
        result = `$${value}`;
        break;
      case 'percentage':
        result = `%${value}`;
        break;
      case 'date': {
        const date = new Date(value);
        result = `${date.getMinutes()}m ${date.getSeconds()}s`;
        break;
      }
    }

    return result;
  };

  return (
    <div className="app-analytics-card">
      <div className="app-analytics-card-info">
        <div className="app-analytics-card-info-label"> {label.toUpperCase()} </div>
        <div className="app-analytics-card-info-value">
          {' '}
          {getFormattedValue(data.value, data.valueType)}{' '}
        </div>
        <div
          className={classNames(
            'app-analytics-card-info-delta flex items-center gap-1',
            data.deltaType === 1 ? 'success' : 'error',
          )}
        >
          <span>{data.deltaType === 1 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}</span>
          <span>
            {data.deltaType === 1 ? '+' : '-'}
            {data.delta}% from last month{' '}
          </span>
        </div>
      </div>

      <div className={`icon icon-${icon}`}></div>
    </div>
  );
}
