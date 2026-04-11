import { type ReactNode, type JSX, useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type DropdownProps = {
  menuItems: string[];
  children: ReactNode;
  isIcon?: boolean;
};

export function Dropdown({ menuItems, isIcon, children }: Readonly<DropdownProps>): JSX.Element {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative app-dropdown">
      <button
        type="button"
        onClick={toggle}
        className="flex self-center items-center justify-center gap-2"
      >
        {children}
        {!isIcon && <ChevronDown size={20} strokeWidth={1} />}
      </button>

      {isOpen && (
        <div className="app-dropdown-menu absolute top-full right-2 mt-2">
          <ul>
            {!!menuItems.length &&
              menuItems.map((item) => (
                <li className="app-dropdown-menu-item" key={item}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
