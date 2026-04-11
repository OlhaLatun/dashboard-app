import { NavbarMain } from '~/components/navbar/navbar-main';
import { Sidebar } from '~/components/sidebar/sidebar';
import { Dashboard } from '~/pages/dashboard/dashboard';

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
        <Dashboard />
      </div>
    </div>
  );
}
