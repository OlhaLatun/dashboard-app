import type { JSX } from 'react';

import { getUserInitials } from '~/components/user-profile-menu/utils';
import './user-profile-menu.scss';

function UserProfileImage({ src, name }: Readonly<{ src?: string; name?: string }>): JSX.Element {
  if (src) {
    return <img src={src} alt={name} />;
  } else {
    return <div className="user-initials"> {getUserInitials(name)}</div>;
  }
}

export function UserProfileMenu() {
  const name = 'John Doe';
  const role = 'Admin';

  return (
    <div className="user-profile flex gap-2 items-center">
      <UserProfileImage name={name} />
      <div className="user-name flex flex-col">
        <span>{name}</span>
        <span>{role}</span>
      </div>
    </div>
  );
}
