import styles from './KanbanList.module.scss';
import Card from '@components/Card/Card';
import AddBtn from '@components/AddBtn/AddBtn';
import EmptyCard from '@components/EmptyCard/EmptyCard';
import DropdownMenu from '@components/DropdownMenu/DropdownMenu';
import { CardProps, KanbanListProps } from '@/types/global';

export default function KanbanList({
  list,
  onDelete,
  onDeleteCard,
  onClickCard,
}: {
  list: KanbanListProps;
  onDelete: (listId: number) => void;
  onDeleteCard: (listId: number, cardId: number) => void;
  onClickCard: (listId?: number, card?: CardProps) => void;
}) {
  const handleDelete = (listId: number) => {
    onDelete(listId);
  };

  const handleDeleteCard = (cardId: number) => {
    onDeleteCard(list.id, cardId);
  };

  const handleCard = (card?: CardProps) => {
    onClickCard(list.id, card);
  };

  const handleDropdownMenu = (selectedMenu: string) => {
    if (selectedMenu === '컬럼 삭제') {
      handleDelete(list.id);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.info}>
          <span className={styles.title}>{list.listTitle}</span>
          {!!list.cards.length && <span className={styles.count}>{list.cards.length}</span>}
        </div>

        {!list.isFixed ? (
          <DropdownMenu
            menuList={['컬럼 삭제']}
            onClick={(menu: string) => handleDropdownMenu(menu)}
          >
            {!!list.cards.length && <AddBtn onClick={() => handleCard()} />}
          </DropdownMenu>
        ) : (
          !!list.cards.length && <AddBtn onClick={() => handleCard()} />
        )}
      </section>

      <section className={styles.cards}>
        {!list.cards.length ? (
          <EmptyCard onClick={() => handleCard()} />
        ) : (
          list.cards.map((card: CardProps) => (
            <Card
              key={card.id}
              card={card}
              onClick={() => handleCard(card)}
              onDelete={() => handleDeleteCard(card.id)}
            />
          ))
        )}
      </section>
    </div>
  );
}
