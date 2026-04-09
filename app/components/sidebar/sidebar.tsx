import {
  ChartColumn,
  ChevronLeft,
  ChevronRight,
  Hexagon,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import classNames from 'classnames';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navItems = [
    {
      id: 1,
      label: 'Dashboard',
      icon: <LayoutDashboard />,
    },
    {
      id: 2,
      label: 'Users',
      icon: <Users />,
    },
    {
      id: 3,
      label: 'Analytics',
      icon: <ChartColumn />,
    },
    {
      id: 4,
      label: 'Settings',
      icon: <Settings />,
    },
  ];

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={classNames('app-sidebar', {
        'app-sidebar--collapsed': isCollapsed,
      })}
    >
      <div className="flex justify-between app-sidebar-header">
        {!isCollapsed && (
          <div className="flex gap-1">
            <Hexagon />
            <h1>Analytics Pro</h1>
          </div>
        )}

        <button type="button" className="app-sidebar-toggle" onClick={handleToggle}>
          {isCollapsed ? (
            <ChevronLeft size={20} strokeWidth={1} />
          ) : (
            <ChevronRight size={20} strokeWidth={1} />
          )}
        </button>
      </div>

      <div className="app-sidebar-navigation">
        <ul>
          {navItems.map(({ id, label, icon }) => (
            <li key={id} className="flex items-center gap-1 p-2 app-sidebar-navigation-item">
              {icon}
              {!isCollapsed && label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
