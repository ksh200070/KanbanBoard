import styles from './KanbanList.module.scss';
import Card from '@components/Card/Card';
import AddBtn from '@components/AddBtn/AddBtn';
import EmptyCard from '@components/EmptyCard/EmptyCard';
import { CardProps, KanbanListProps } from '@/types/global';

export default function KanbanList({ list }: { list: KanbanListProps }) {
  return (
    <>
      {!list.cards.length ? (
        <div className={styles.container}>
          <span className={styles.title}>{list.listTitle}</span>
          <EmptyCard />
        </div>
      ) : (
        <div className={styles.container}>
          <section className={styles['list-info']}>
            <div className={styles.info}>
              <span className={styles.title}>{list.listTitle}</span>
              <span className={styles.count}>{list.cards.length}</span>
            </div>
            <AddBtn />
          </section>
          <section className={styles['list-detail']}>
            {list.cards.map((card: CardProps) => (
              <Card key={card.id} card={card} />
            ))}
          </section>
        </div>
      )}
    </>
  );
}
