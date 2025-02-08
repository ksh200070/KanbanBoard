import styles from './Card.module.scss';
import { CardProps, TagProps } from '@/types/global';
import Tag from '@components/Tag/Tag';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

export default function Card({
  card,
  onClick,
  onDelete,
}: {
  card: CardProps;
  onClick: () => void;
  onDelete: () => void;
}) {
  const handleDropdownMenu = (selectedMenu: string) => {
    if (selectedMenu === '카드 제거') {
      onDelete();
    }
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.header}>
        <div className={styles.tags}>
          {card.tags.map((tag: TagProps) => (
            <Tag key={tag.name} name={tag.name} color={tag.color} />
          ))}
        </div>
        <DropdownMenu
          menuList={['카드 제거']}
          onClick={(menu: string) => handleDropdownMenu(menu)}
        ></DropdownMenu>
      </div>
      <span className={styles.content}>{card.content}</span>
    </div>
  );
}
