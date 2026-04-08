import { UserProfileMenu } from '~/components/user-profile-menu/user-profile-menu';
import { Dropdown } from '~/shared/dropdown/dropdown';

export function NavbarMain() {
  return (
    <nav className="navbar-main">
      <Dropdown template={<UserProfileMenu />} menuItems={['one', 'two', 'three']} />
    </nav>
  );
}
