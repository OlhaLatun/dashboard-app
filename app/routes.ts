import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
  route('', 'routes/app.tsx', [
    route('dashboard', './pages/dashboard/dashboard.tsx'),
    route('users', './pages/users/users.tsx'),
    route('analytics', './pages/analytics/analytics.tsx'),
    route('settings', './pages/settings/settings.tsx'),
  ]),
] satisfies RouteConfig;
