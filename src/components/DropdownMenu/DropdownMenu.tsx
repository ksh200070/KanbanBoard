import { useState, ReactNode } from 'react';
import styles from './DropdownMenu.module.scss';
import IconMenu from '@/assets/icon-menu.png';

interface DropdownMenuProps {
  menuList: string[];
  onClick: (menu: string) => void;
  children?: ReactNode;
}

export default function DropdownMenu({ menuList, onClick, children }: DropdownMenuProps) {
  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);

  const handleClickMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setShowDropdownMenu((prev) => !prev);
  };

  return (
    <div className={styles.btns}>
      <button className={styles['menu-btn']} onClick={handleClickMenu}>
        <img src={IconMenu} alt='menu icon' />
      </button>
      {children}
      {showDropdownMenu && (
        <div className={styles['dropdown-container']}>
          {menuList.map((menu: string) => (
            <div
              key={menu}
              className={styles['dropdown-item']}
              onClick={(e) => {
                onClick(menu);
                e.stopPropagation();
              }}
            >
              {menu}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
