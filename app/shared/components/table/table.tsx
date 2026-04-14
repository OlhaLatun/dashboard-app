import { type JSX, type ReactNode, useEffect, useState } from 'react';
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Column } from '~/shared/interfaces/table.interfaces';
import './table.scss';

export function Table<T>({
  columns,
  data,
  pagination = false,
  itemsPerPage = 0,
  caption = '',
  captionDescription = '',
}: Readonly<{
  columns: Column<T>[];
  data: T[];
  pagination?: boolean;
  itemsPerPage?: number;
  caption?: string;
  captionDescription?: string;
}>): JSX.Element {
  const [tableData, setTableData] = useState<T[]>(data);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    order: 1 | -1;
  } | null>(null);
  const [paginatorConfig, setPaginatorConfig] = useState<{
    currentPage: number;
    start: number;
    end: number;
  }>({
    currentPage: 1,
    start: 0,
    end: itemsPerPage,
  });

  useEffect(() => {
    if (pagination) {
      setTableData(data.slice(paginatorConfig.start, paginatorConfig.end));
    } else {
      setTableData(data);
    }
  }, [data, paginatorConfig]);

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

  const handlePageChange = (goTo: 'next' | 'prev') => {
    let start: number, end: number, currentPage: number;
    if (goTo === 'next') {
      currentPage = paginatorConfig.currentPage + 1;
      end = currentPage * itemsPerPage;
      start = end - itemsPerPage;
    } else {
      currentPage = paginatorConfig.currentPage - 1;
      start = currentPage * itemsPerPage - itemsPerPage;
      end = currentPage * itemsPerPage;
    }

    setPaginatorConfig({
      currentPage,
      start,
      end,
    });
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
        {pagination && (
          <tfoot>
            <tr>
              <td scope="row" colSpan={columns.length}>
                <div className="flex justify-between">
                  <span> Items per page: {itemsPerPage}</span>
                  <div className="flex items-center gap-8">
                    <button
                      className="app-table-pagination-button"
                      onClick={() => handlePageChange('prev')}
                      disabled={paginatorConfig.currentPage === 1}
                    >
                      <ChevronLeft /> Prev
                    </button>
                    <span> {paginatorConfig.currentPage} </span>
                    <button
                      className="app-table-pagination-button"
                      onClick={() => handlePageChange('next')}
                      disabled={
                        paginatorConfig.currentPage === Math.ceil(data.length / itemsPerPage)
                      }
                    >
                      Next <ChevronRight />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}
