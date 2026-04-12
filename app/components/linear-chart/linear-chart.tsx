import { type JSX } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './chart.scss';
import { linearChartData as data } from '~/mocks/charts';

export function LinearChart({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>): JSX.Element {
  return (
    <div className="app-chart-container">
      <div className="app-chart-title">
        <h2> {title}</h2>
        <span> {description}</span>
      </div>

      <LineChart
        style={{
          width: '100%',
          aspectRatio: 1.618,
        }}
        data={data}
        responsive
      >
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
        <Line
          type="monotone"
          dataKey="value"
          stroke="var(--color-primary)"
          dot={{
            fill: 'var(--color-primary)',
          }}
          activeDot={{ r: 8, stroke: 'white' }}
        />
      </LineChart>
    </div>
  );
}
