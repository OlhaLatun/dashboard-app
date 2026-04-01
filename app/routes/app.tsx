import { NavbarMain } from '~/components/navbar/navbar-main';
import { Sidebar } from '~/components/sidebar/sidebar';
import { Dashboard } from '~/pages/dashboard/dashboard';
import type { Route } from './+types/app';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Dashboard App' },
    { name: 'simple dashboard app', content: 'A simple dashboard app built with React Router' },
  ];
}

export default function App() {
  return (
    <div className="container flex ">
      <NavbarMain />
      <div className="container-inner flex">
        <Sidebar />
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
