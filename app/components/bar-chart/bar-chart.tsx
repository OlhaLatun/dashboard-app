import { type JSX } from 'react';
import '../linear-chart/chart.scss';
import { barChartData as data } from '~/mocks/charts';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

export function BarlikeChart({
  title,
  description,
}: Readonly<{ title: string; description: string }>): JSX.Element {
  return (
    <div className="app-chart-container">
      <div className="app-chart-title">
        <h2> {title}</h2>
        <span> {description}</span>
      </div>

      <BarChart style={{ width: '100%', aspectRatio: 1.618 }} responsive data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis domain={[0, 'dataMax + 6000']} />
        <Tooltip
          cursor={{
            stroke: 'var(--border-color)',
          }}
          contentStyle={{
            backgroundColor: 'var(--bg-color-primary)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--box-shadow-lg)',
          }}
        />
        <Bar
          dataKey="value"
          fill="var(--color-primary)"
          activeBar={{ fill: 'var(--color-primary)' }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
}
