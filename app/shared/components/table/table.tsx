import { type JSX, type ReactNode, useEffect, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
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
  const [tableData, setTableData] = useState<T[]>(data);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    order: 1 | -1;
  } | null>(null);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;

    let order: 1 | -1 = 1;

    if (sortConfig?.key === col.accessor) {
      order = sortConfig.order === 1 ? -1 : 1;
    }

    const sorted = [...tableData].sort((a, b) => {
      const aValue = a[col.accessor];
      const bValue = b[col.accessor];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return order === 1 ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return order === 1 ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

    setTableData(sorted);
    setSortConfig({ key: col.accessor, order });
  };

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
              <th key={col.accessor} onClick={() => handleSort(col)}>
                <div className="flex items-center gap-2">
                  <span>{col.header.toUpperCase()}</span>
                  {col.sortable &&
                    sortConfig?.key === col.accessor &&
                    (sortConfig?.order === 1 ? <ArrowUp size={12} /> : <ArrowDown size={12} />)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
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
