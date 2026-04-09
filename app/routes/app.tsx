import { NavbarMain } from '~/components/navbar/navbar-main';
import { Sidebar } from '~/components/sidebar/sidebar';
import { Dashboard } from '~/pages/dashboard/dashboard';
import type { Route } from './+types/app';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
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
        <Dashboard />
      </div>
    </div>
  );
}
