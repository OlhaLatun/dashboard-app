import { Search } from 'lucide-react';

export function SearchInput() {
  return (
    <div className="relative flex-1">
      <Search className="absolute top-2 left-2" size={20} strokeWidth={1} />
      <input type="search" placeholder="Search..." className="app-search-input" />
    </div>
  );
}
