import { type JSX, type ReactNode } from 'react';
import type { Column } from '~/shared/interfaces/table.interfaces';
import './table.scss';

export function Table<T>({
  columns,
  data,
  caption = '',
  captionDescription = '',
}: Readonly<{
  columns: Column<T>[];
  data: T[];
  caption?: string;
  captionDescription?: string;
}>): JSX.Element {
  return (
    <div className="app-table-container">
      <table>
        {caption && (
          <caption>
            <h3> {caption}</h3>
            {captionDescription && <span> {captionDescription}</span>}
          </caption>
        )}
        <thead className="app-table-header">
          <tr>
            {columns.map((col) => (
              <th key={col.accessor}>{col.header.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr className="app-table-row" key={i}>
              {columns.map((col) => (
                <td className="app-table-col" key={col.accessor}>
                  {col.render ? col.render(row) : (row[col.accessor] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
