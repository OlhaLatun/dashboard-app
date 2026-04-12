import { Bell, BellDot } from 'lucide-react';

import { UserProfileMenu } from '~/components/user-profile-menu/user-profile-menu';
import { Dropdown } from '~/shared/components/dropdown/dropdown';
import { SearchInput } from '~/shared/components/search/search';

export function NavbarMain() {
  const notifications = ['notification1', 'notification2'];
  return (
    <nav className="app-navbar-main">
      <SearchInput />
      <Dropdown menuItems={['notification1', 'notification2']} isIcon={true}>
        {notifications.length ? <BellDot /> : <Bell />}
      </Dropdown>
      <Dropdown menuItems={['one', 'two', 'three']}>
        <UserProfileMenu />
      </Dropdown>
    </nav>
  );
}
