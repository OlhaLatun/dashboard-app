import { UserProfileMenu } from '~/components/user-profile-menu/user-profile-menu';
import { Dropdown } from '~/shared/dropdown/dropdown';
import { SearchInput } from '~/shared/search/search';

export function NavbarMain() {
  return (
    <nav className="app-navbar-main">
      <SearchInput />
      <Dropdown template={<UserProfileMenu />} menuItems={['one', 'two', 'three']} />
    </nav>
  );
}
