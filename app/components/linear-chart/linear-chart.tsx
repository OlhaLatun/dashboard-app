import { type JSX } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './linear-chart.scss';
const data = [
  {
    month: 'Jan',
    value: 4000,
    previous: 2400,
  },
  {
    month: 'Feb',
    value: 3000,
    previous: 4000,
  },
  {
    month: 'Mar',
    value: 2000,
    previous: 3000,
  },
  {
    month: 'Apr',
    value: 2780,
    previous: 2000,
  },
  {
    month: 'May',
    value: 3000,
    previous: 2780,
  },
  {
    month: 'June',
    value: 4000,
    previous: 3000,
  },
  {
    month: 'July',
    value: 2750,
    previous: 4100,
  },
];

export function LinearChart({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>): JSX.Element {
  return (
    <div className="app-linear-chart-container">
      <div className="app-linear-chart-title">
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
