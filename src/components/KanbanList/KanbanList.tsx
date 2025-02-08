import styles from './KanbanList.module.scss';
import { useState } from 'react';
import IconMenu from '@/assets/icon-menu.png';
import Card from '@components/Card/Card';
import AddBtn from '@components/AddBtn/AddBtn';
import EmptyCard from '@components/EmptyCard/EmptyCard';
import { CardProps, KanbanListProps } from '@/types/global';

export default function KanbanList({
  list,
  onDelete,
}: {
  list: KanbanListProps;
  onDelete: (listId: number) => void;
}) {
  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false);

  const handleDelete = (listId: number) => {
    onDelete(listId);
    setShowDropdownMenu(false);
  };

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.info}>
          <span className={styles.title}>{list.listTitle}</span>
          {!!list.cards.length && <span className={styles.count}>{list.cards.length}</span>}
        </div>
        <div className={styles.btns}>
          {!list.isFixed && (
            <button
              className={styles['menu-btn']}
              onClick={() => setShowDropdownMenu((prev) => !prev)}
            >
              <img src={IconMenu} alt='menu icon' />
            </button>
          )}

          {showDropdownMenu && (
            <div className={styles['dropdown-container']}>
              <div className={styles['dropdown-item']} onClick={() => handleDelete(list.id)}>
                컬럼 삭제
              </div>
              {/* '제목 수정' 기능 추가 */}
            </div>
          )}
          <AddBtn />
        </div>
      </section>

      <section className={styles.cards}>
        {!list.cards.length ? (
          <EmptyCard />
        ) : (
          list.cards.map((card: CardProps) => <Card key={card.id} card={card} />)
        )}
      </section>
    </div>
  );
}
