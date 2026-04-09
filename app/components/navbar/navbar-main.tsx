import { Bell, BellDot } from 'lucide-react';

import { UserProfileMenu } from '~/components/user-profile-menu/user-profile-menu';
import { Dropdown } from '~/shared/dropdown/dropdown';
import { SearchInput } from '~/shared/search/search';

export function NavbarMain() {
  const notifications = ['notification1', 'notification2'];
  return (
    <nav className="app-navbar-main">
      <SearchInput />
      <Dropdown
        template={notifications.length ? <BellDot /> : <Bell />}
        menuItems={['notification1', 'notification2']}
        isIcon={true}
      />
      <Dropdown template={<UserProfileMenu />} menuItems={['one', 'two', 'three']} />
    </nav>
  );
}
