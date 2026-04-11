import {
  ChartColumn,
  ChevronLeft,
  ChevronRight,
  Hexagon,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react';
import { useState, type JSX } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export function Sidebar(): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navItems = [
    {
      id: 1,
      label: 'Dashboard',
      icon: <LayoutDashboard />,
      link: '/dashboard',
    },
    {
      id: 2,
      label: 'Users',
      icon: <Users />,
      link: '/users',
    },
    {
      id: 3,
      label: 'Analytics',
      icon: <ChartColumn />,
      link: '/analytics',
    },
    {
      id: 4,
      label: 'Settings',
      icon: <Settings />,
      link: '/settings',
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
          {navItems.map(({ id, label, icon, link }) => (
            <NavLink
              to={link}
              key={id}
              className={({ isActive }) =>
                classNames(
                  'flex items-center gap-1 p-2 app-sidebar-navigation-item',
                  isActive && 'app-sidebar-navigation-item--active',
                )
              }
            >
              {icon}
              {!isCollapsed && label}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
