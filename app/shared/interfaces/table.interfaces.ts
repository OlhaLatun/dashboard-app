import type { ReactNode } from 'react';

export interface Column<T> {
  header: string;
  accessor: Extract<keyof T, string>;
  render?: (data: T) => ReactNode;
}
