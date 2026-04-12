import { Navigate, Outlet } from 'react-router';

import { NavbarMain } from '~/components/navbar/navbar-main';
import { Sidebar } from '~/components/sidebar/sidebar';

export function meta() {
  return [
    { title: 'Dashboard App' },
    { name: 'simple dashboard app', content: 'A simple dashboard app built with React Router' },
  ];
}

export default function App() {
  return (
    <div className="app-container flex">
      <Sidebar />
      <div className="app-content">
        <NavbarMain />
        <div className="app-content-container">
          <Navigate to="./dashboard" replace />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
